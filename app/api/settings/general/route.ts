import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";
import { eq } from "drizzle-orm";

import { db } from "@/database";
import { usersTable } from "@/database/schema/users";
import { log } from "@/lib/logs";
import { generalSchema } from "@/lib/validation/general-settings-form-validation";

export async function GET(req: NextRequest) {
  try {
    const session = await getSession(req, NextResponse.next());

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized", message: "Please login.", ok: false },
        { status: 401 }
      );
    }

    // Fetch the user from the database
    const user = await db.query.usersTable.findFirst({
      where: eq(usersTable.userId, session.user.sub),
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found", message: "User does not exist.", ok: false },
        { status: 404 }
      );
    }

    // Return the general settings
    return NextResponse.json({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      username: user.name,
      // pfp: user.profileImage,
      ok: true,
    });
  } catch (error: any) {
    log("Error fetching general settings:", "error", {
      error: error?.message || "",
    });
    return NextResponse.json(
      {
        error: "Internal Server Error",
        ok: false,
        message: "Error fetching general settings",
      },
      { status: 500 }
    );
  }
}

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

    const {
      firstName,
      lastName,
      email,
      username,
      // pfp
    } = parsedData.data;

    // Update user settings in the database
    await db
      .update(usersTable)
      .set({
        firstName,
        lastName,
        email,
        name: username,
        // profileImage: pfp
      })
      .where(eq(usersTable.userId, session.user.sub));

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
