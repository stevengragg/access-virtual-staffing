import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";
import { eq } from "drizzle-orm";

import { db } from "@/database";
import { users } from "@/database/schema/users";
import { log } from "@/lib/logs";
import { generalSchema } from "@/lib/validation/general-settings-form-validation";
import { getManagementApiToken } from "@/utils/get-management-token";

export async function POST(req: NextRequest) {
  try {
    const session = await getSession(req, NextResponse.next());

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized", message: "Please login.", ok: false },
        { status: 401 }
      );
    }

    const body = await req.json();
    const parsedData = generalSchema.safeParse(body);
    log("POST /api/settings/general", "info", { body });
    if (!parsedData.success) {
      return NextResponse.json(
        {
          error: "Validation Error",
          message: parsedData.error.format(),
          ok: false,
        },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, username } = parsedData.data;

    await db
      .update(users)
      .set({
        firstName,
        lastName,
        email,
        name: username,
      })
      .where(eq(users.userId, session.user.sub));

    const managementApiToken = await getManagementApiToken();
    const auth0Response = await fetch(
      `${process.env.AUTH0_OAUTH_AUDIENCE}users/${session.user.sub}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${managementApiToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          given_name: firstName,
          family_name: lastName,
          email,
          nickname: username,
        }),
      }
    );

    if (!auth0Response.ok) {
      return NextResponse.json(
        {
          error: "Failed to update Auth0 profile",
          message: "Error updating user profile in Auth0",
          ok: false,
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: "General settings updated successfully!",
      ok: true,
    });
  } catch (error: any) {
    log("Error updating general settings:", "error", {
      error: error?.message || "",
    });
    return NextResponse.json(
      {
        error: "Internal Server Error",
        ok: false,
        message: "Error updating general settings",
      },
      { status: 500 }
    );
  }
}
