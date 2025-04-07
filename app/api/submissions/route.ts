import { NextResponse } from "next/server";
import { jobApplications } from "@/database/schema/job-applications";
import { db } from "@/database";

export async function GET(request: Request) {
  const applications = await db.select().from(jobApplications);
  return NextResponse.json(applications);
}

export async function POST(request: Request) {
  const { jobId, userId, profileId } = await request.json();

  const newApplication = await db.insert(jobApplications).values({
    userId,
    profileId,
    podioItemId: jobId,
    status: "pending",
    progress: "in_review",
  });

  return NextResponse.json(newApplication);
}
