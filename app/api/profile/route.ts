import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";
import { eq } from "drizzle-orm";

import { db } from "@/database"; // Assuming db is exported from your database configuration file
import {
  profiles,
  phones,
  emails,
  contentLinks,
  assessmentTests,
  workSamples,
} from "@/database/schema/profiles";
import { usersTable } from "@/database/schema/users"; // Import usersTable

export async function GET(req: NextRequest) {
  try {
    const session = await getSession(req, NextResponse.next());
    console.log(session);
    if (!session) {
      return NextResponse.json(
        {
          error: "Unauthorized",
          message: "Please login.",
          ok: false,
          profile: null,
        },
        { status: 401 }
      );
    }

    const user = await db.query.usersTable.findFirst({
      where: eq(usersTable.userId, session.user.sub),
    });

    if (!user) {
      return NextResponse.json(
        {
          error: "User not found",
          message: "User does not exist.",
          ok: false,
          profile: null,
        },
        { status: 404 }
      );
    }

    const userId = user.id;

    // Check if profile exists
    const existingProfile = await db.query.profiles.findFirst({
      where: eq(profiles.userId, userId),
    });

    if (!existingProfile) {
      return NextResponse.json(
        {
          error: "Profile not found",
          message: "Profile does not exist.",
          ok: false,
          profile: null,
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Success!",
      ok: true,
      profile: existingProfile,
      phones: await db.query.phones.findMany({
        where: eq(phones.profileId, existingProfile.id),
      }),
      emails: await db.query.emails.findMany({
        where: eq(emails.profileId, existingProfile.id),
      }),
      contentLinks: await db.query.contentLinks.findMany({
        where: eq(contentLinks.profileId, existingProfile.id),
      }),
      assessmentTests: await db.query.assessmentTests.findMany({
        where: eq(assessmentTests.profileId, existingProfile.id),
      }),
      workSamples: await db.query.workSamples.findMany({
        where: eq(workSamples.profileId, existingProfile.id),
      }),
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        ok: false,
        message: "Error updating profile",
        profile: null,
      },
      { status: 500 }
    );
  }
}
