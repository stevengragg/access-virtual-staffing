"use server";

import { getSession } from "@auth0/nextjs-auth0";
import { and, eq } from "drizzle-orm";

import { db } from "@/database";
import { jobApplications } from "@/database/schema/job-applications";
import { log } from "@/lib/logs";
import { users } from "../schema";

export async function getJobApplicationByJobId(jobId: string) {
  try {
    const session = await getSession();
    if (!session || !session.user) {
      throw new Error("User session not found");
    }
    const { user } = session;
    console.log("user", user);

    const currentUser = await db
      .select()
      .from(users)
      .where(eq(users.userId, user.sub))
      .limit(1);

    if (user.length === 0) {
      return { ok: false, message: "User not found", user: undefined };
    }

    const application = await db
      .select()
      .from(jobApplications)
      .where(
        and(
          eq(jobApplications.jobId, jobId),
          eq(jobApplications.userId, currentUser[0].id)
        )
      )
      .limit(1);

    if (application.length === 0) {
      return { ok: false, message: "No application found", application: null };
    }

    return {
      ok: true,
      message: "Application fetched successfully",
      application: application[0],
    };
  } catch (error) {
    log("Error fetching job application:", "error", error);
    return {
      ok: false,
      message: "Failed to fetch job application",
      application: null,
    };
  }
}

export async function getJobApplicationById(jobApplicationId: string) {
  try {
    const session = await getSession();
    if (!session || !session.user) {
      throw new Error("User session not found");
    }
    const { user } = session;
    console.log("user", user);

    const currentUser = await db
      .select()
      .from(users)
      .where(eq(users.userId, user.sub))
      .limit(1);

    if (user.length === 0) {
      return { ok: false, message: "User not found", user: undefined };
    }

    const application = await db
      .select()
      .from(jobApplications)
      .where(
        and(
          eq(jobApplications.applicationPublicId, jobApplicationId),
          eq(jobApplications.userId, currentUser[0].id)
        )
      )
      .limit(1);

    if (application.length === 0) {
      return { ok: false, message: "No application found", application: null };
    }

    return {
      ok: true,
      message: "Application fetched successfully",
      application: application[0],
    };
  } catch (error) {
    log("Error fetching job application:", "error", error);
    return {
      ok: false,
      message: "Failed to fetch job application",
      application: null,
    };
  }
}
