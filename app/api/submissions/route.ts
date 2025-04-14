import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";

import { jobApplications } from "@/database/schema/job-applications";
import { db } from "@/database";
import { profiles, users } from "@/database/schema";
import { and, eq } from "drizzle-orm";
import { log } from "@/lib/logs";
import { createNotification } from "@/database/mutations/job_applicants";
import { getJobPost } from "@/lib/api/jobs";
import { sendEmailNotification } from "@/services/send-email-notif";
import { generateNumericId } from "@/utils/generate-numeric-id";

export async function GET(request: NextRequest) {
  try {
    const session = await getSession(request, NextResponse.next());

    if (!session) {
      return NextResponse.json(
        { message: "Please login.", ok: false },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const jobId = searchParams.get("jobId");

    if (!jobId) {
      return NextResponse.json(
        { message: "jobId is required", ok: false },
        { status: 400 }
      );
    }

    const user = await db
      .select()
      .from(users)
      .where(eq(users.userId, session.user.sub))
      .limit(1);

    if (!user.length) {
      return NextResponse.json(
        { message: "User not found", ok: false },
        { status: 404 }
      );
    }

    const application = await db
      .select()
      .from(jobApplications)
      .where(
        and(
          eq(jobApplications.jobId, jobId),
          eq(jobApplications.userId, user[0].id)
        )
      )
      .limit(1);

    if (!application.length) {
      return NextResponse.json(
        { message: "No application found", ok: false },
        { status: 404 }
      );
    }

    log("GET /api/submissions", "info", {
      message: "Application fetched successfully",
      userId: user[0].id,
      jobId,
    });

    return NextResponse.json(
      { message: "Application found", ok: true, application: application[0] },
      { status: 200 }
    );
  } catch (error: any) {
    log("GET /api/submissions", "error", { error: error.message });

    return NextResponse.json(
      {
        error: "Internal Server Error",
        ok: false,
        message: "Error fetching application",
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
        { message: "Please login.", ok: false },
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
        { message: "User not found", ok: false },
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
        { message: "Profile not found", ok: false },
        { status: 404 }
      );
    }

    // Check if user already applied for the job
    const existingApplication = await db
      .select()
      .from(jobApplications)
      .where(eq(jobApplications.jobId, jobId));

    console.log("existingApplication", existingApplication);

    if (existingApplication.length) {
      return NextResponse.json(
        { message: "Already applied", ok: false },
        { status: 400 }
      );
    }

    // Insert new application
    const [newApplication] = await db
      .insert(jobApplications)
      .values({
        userId: user[0].id,
        applicationPublicId: generateNumericId(),
        profileId: profile[0].id,
        jobId,
        status: "on_going",
        progress: "in_review",
      })
      .returning({ applicationId: jobApplications.applicationPublicId });

    log("POST /api/submissions", "info", {
      message: "Application submitted successfully",
      userId: user[0].id,
      jobId,
    });

    const job = await getJobPost(jobId);

    createNotification(
      user[0].id,
      `You sent a job application to "${job?.item?.title}". Please wait for the recruiter to reach out. `,
      "info",
      `/app/submissions/${newApplication.applicationId}`
    );

    sendEmailNotification({
      to: [user[0].email],
      subject: `You sent a job application to "${job?.item?.title}"`,
      message:
        "Cheers! We received your application. Please wait for the recruiter to reach out.",
      footer:
        "If you have any questions, feel free to reach out 👉 support@accessvirtualstaffing.com",
    });

    return NextResponse.json(
      {
        message: "Application submitted successfully",
        ok: true,
        applicationId: newApplication.applicationId,
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
