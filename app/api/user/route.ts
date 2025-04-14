import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";
import { eq } from "drizzle-orm";

import { db } from "@/database";
import { users } from "@/database/schema/users";
import { log } from "@/lib/logs";

export async function GET(req: NextRequest) {
  try {
    const session = await getSession(req, NextResponse.next());

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized", message: "Please login.", ok: false },
        { status: 401 }
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

    return NextResponse.json({
      userInfo: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.name,
        profileImage: user.profileImage,
        createdAt: user.createdAt,
        jobRecommendationNotifPref: user.jobRecommendationNotifPref,
        jobSubmissionNotifPref: user.jobSubmissionNotifPref,
        isNewUser: user.isNewUser,
        jobSearchStatus: user.jobSearchStatus,
      },
      message: "User info fetched successfully.",
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
