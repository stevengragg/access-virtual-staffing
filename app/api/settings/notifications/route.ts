import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";
import { eq } from "drizzle-orm";

import { db } from "@/database";
import { usersTable } from "@/database/schema/users";
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

    // Return the current notification settings
    return NextResponse.json({
      jobRecommendation: user.jobRecommendationNotifPref === "enabled",
      jobSubmission: user.jobSubmissionNotifPref === "enabled",
      ok: true,
    });
  } catch (error: any) {
    log("Error fetching notifications:", "error", { error: error?.message || "" });
    return NextResponse.json(
      {
        error: "Internal Server Error",
        ok: false,
        message: "Error fetching notification settings",
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
    log("POST /api/notifications/update-notifications", "info", { body });

    // Fetch the user using session.user.sub
    const user = await db.query.usersTable.findFirst({
      where: eq(usersTable.userId, session.user.sub),
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found", message: "User does not exist.", ok: false },
        { status: 404 }
      );
    }

    // Update notification preferences
    await db
      .update(usersTable)
      .set({
        jobRecommendationNotifPref: body.jobRecommendation ? "enabled" : "disabled",
        jobSubmissionNotifPref: body.jobSubmission ? "enabled" : "disabled",
      })
      .where(eq(usersTable.userId, user.userId));

    return NextResponse.json({
      message: "Notification settings updated successfully",
      ok: true,
    });
  } catch (error: any) {
    log("Error updating notifications:", "error", { error: error?.message || "" });
    return NextResponse.json(
      {
        error: "Internal Server Error",
        ok: false,
        message: "Error updating notifications",
      },
      { status: 500 }
    );
  }
}
