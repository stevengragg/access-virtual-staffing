import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";
import { eq } from "drizzle-orm";
import { users } from "@/database/schema/users";
import { db } from "@/database";
import { log } from "@/lib/logs";
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

    const { profileImageURL } = await req.json();
    log("POST /api/profile/update-avatar", "info", { profileImageURL });

    if (!profileImageURL) {
      return NextResponse.json(
        {
          error: "Invalid input",
          message: "Profile image URL is required.",
          ok: false,
        },
        { status: 400 }
      );
    }

    const user = await db.query.users.findFirst({
      where: eq(users.userId, session.user.sub),
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found", message: "User does not exist.", ok: false },
        { status: 404 }
      );
    }

    let managementApiToken = user.apiToken;
    const tokenExpiration = new Date(user.apiTokenExpiration || 0);
    const currentTime = new Date();

    // Check if token is missing or expired
    if (
      !managementApiToken ||
      tokenExpiration.getTime() - currentTime.getTime() < 23 * 60 * 60 * 1000
    ) {
      managementApiToken = await getManagementApiToken();
      const newExpiration = new Date(
        currentTime.getTime() + 24 * 60 * 60 * 1000
      ).toISOString();

      // Update the user's API token and expiration in the database
      await db
        .update(users)
        .set({
          apiToken: managementApiToken,
          apiTokenExpiration: new Date(newExpiration),
        })
        .where(eq(users.userId, session.user.sub));
    }

    // Update profile image in Auth0
    const auth0Response = await fetch(
      `${process.env.AUTH0_OAUTH_AUDIENCE}users/${session.user.sub}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${managementApiToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ picture: profileImageURL }),
      }
    );

    if (!auth0Response.ok) {
      return NextResponse.json(
        {
          error: "Failed to update profile.",
          message: "Failed to update profile image in Auth0",
          ok: false,
        },
        { status: 400 }
      );
    }

    // Update profile image in the database
    await db
      .update(users)
      .set({ profileImage: profileImageURL })
      .where(eq(users.userId, session.user.sub));

    log("POST /api/profile/update-avatar: success", "info", {
      userId: session.user.sub,
      profileImageURL,
    });

    return NextResponse.json({
      message: "Profile image updated successfully",
      ok: true,
    });
  } catch (error: any) {
    log("Error updating profile image:", "error", {
      error: error?.message || "",
    });
    return NextResponse.json(
      { error: "Failed to update profile image" },
      { status: 500 }
    );
  }
}
