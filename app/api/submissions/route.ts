import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";

import { jobApplications } from "@/database/schema/job-applications";
import { db } from "@/database";
import { profiles, users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { log } from "@/lib/logs";

export async function GET(request: NextRequest) {
  const applications = await db.select().from(jobApplications);
  return NextResponse.json(applications);
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

    const { jobId } = await req.json();

    // Fetch user data
    const user = await db
      .select()
      .from(users)
      .where(eq(users.userId, session.user.sub))
      .limit(1);

    if (!user.length) {
      return NextResponse.json(
        { error: "User not found", ok: false },
        { status: 404 }
      );
    }

    const profile = await db
      .select()
      .from(profiles)
      .where(eq(profiles.userId, user[0].id))
      .limit(1);

    if (!profile.length) {
      return NextResponse.json(
        { error: "Profile not found", ok: false },
        { status: 404 }
      );
    }

    // Check if user already applied for the job
    const existingApplication = await db
      .select()
      .from(jobApplications)
      .where(eq(jobApplications.jobId, jobId))
      .limit(1);

    if (existingApplication.length) {
      return NextResponse.json(
        { error: "Already applied", ok: false },
        { status: 400 }
      );
    }

    // Insert new application
    const [newApplication] = await db
      .insert(jobApplications)
      .values({
        userId: user[0].id,
        profileId: profile[0].id,
        jobId,
        status: "pending",
        progress: "in_review",
      })
      .returning({ id: jobApplications.id });

    log("POST /api/submissions", "info", {
      message: "Application submitted successfully",
      userId: user[0].id,
      jobId,
    });
    return NextResponse.json(
      {
        message: "Application submitted successfully",
        ok: true,
        applicationId: newApplication.id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    log("POST /api/submissions", "error", { error: error.message });

    return NextResponse.json(
      {
        error: "Internal Server Error",
        ok: false,
        message: "Error fetching user data",
      },
      { status: 500 }
    );
  }
}
