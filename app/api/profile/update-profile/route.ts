import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";
import { eq } from "drizzle-orm";

import { db } from "@/database";
import {
  profiles,
  phones,
  emails,
  contentLinks,
  assessmentTests,
  workSamples,
} from "@/database/schema/profiles";
import { users } from "@/database/schema/users";
import { log } from "@/lib/logs";

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
    log("POST /api/profile/update-profile", "info", { body });

    const user = await db.query.users.findFirst({
      where: eq(users.userId, session.user.sub),
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found", message: "User does not exist.", ok: false },
        { status: 404 }
      );
    }

    const userId = user.id;

    const existingProfile = await db.query.profiles.findFirst({
      where: eq(profiles.userId, userId),
    });

    let profileId;

    if (existingProfile) {
      const updatedProfile = await db
        .update(profiles)
        .set({
          jobTitle: body.jobTitle,
          whyFit: body.whyFit,
          whatStrengths: body.whatStrengths,
          whatNeedImprovement: body.whatNeedImprovement,
          address: body.address,
          skypeId: body.skypeId,
          dateOfBirth: new Date(body.dateOfBirth),
          hasPaypal: body.hasPaypal,
          numberOfChildren: body.numberOfChildren,
          internetProvider: body.internetProvider,
          numberOfMonitors: body.numberOfMonitors,
          numberOfExperience: body.numberOfExperience,
          salaryUnit: body.salaryUnit,
          desiredSalary: body.desiredSalary.toString(),
          howHear: body.howHear,
          referrer: body.referrer,
        })
        .where(eq(profiles.userId, userId))
        .returning();

      profileId = updatedProfile[0].id;

      await db.delete(phones).where(eq(phones.profileId, profileId));
      await db.delete(emails).where(eq(emails.profileId, profileId));
      await db
        .delete(contentLinks)
        .where(eq(contentLinks.profileId, profileId));
      await db
        .delete(assessmentTests)
        .where(eq(assessmentTests.profileId, profileId));
      await db.delete(workSamples).where(eq(workSamples.profileId, profileId));
    } else {
      const profile = await db
        .insert(profiles)
        .values({
          jobTitle: body.jobTitle,
          userId: userId,
          whyFit: body.whyFit,
          whatStrengths: body.whatStrengths,
          whatNeedImprovement: body.whatNeedImprovement,
          address: body.address,
          skypeId: body.skypeId,
          dateOfBirth: new Date(body.dateOfBirth),
          hasPaypal: body.hasPaypal,
          numberOfChildren: body.numberOfChildren,
          internetProvider: body.internetProvider,
          numberOfMonitors: body.numberOfMonitors,
          numberOfExperience: body.numberOfExperience,
          salaryUnit: body.salaryUnit,
          desiredSalary: body.desiredSalary.toString(),
          howHear: body.howHear,
          referrer: body.referrer,
        })
        .returning();

      profileId = profile[0].id;
    }

    await Promise.all(
      body.phone.map((phone: any) =>
        db.insert(phones).values({
          profileId,
          number: phone.number,
          type: phone.type,
        })
      )
    );

    await Promise.all(
      body.emailAddress.map((email: any) =>
        db.insert(emails).values({
          profileId,
          address: email.address,
          type: email.type,
        })
      )
    );

    await Promise.all(
      body.contentLinks.map((link: any) =>
        db.insert(contentLinks).values({
          profileId,
          link: link.link,
        })
      )
    );

    await Promise.all(
      body.assessmentTests.map((test: any) =>
        db.insert(assessmentTests).values({
          profileId,
          link: test.link,
        })
      )
    );

    await Promise.all(
      body.workSamples.map((sample: any) =>
        db.insert(workSamples).values({
          profileId,
          link: sample.link,
        })
      )
    );

    return NextResponse.json({
      message: "Profile updated successfully",
      ok: true,
    });
  } catch (error: any) {
    log("Error fetching profile:", "error", { error: error?.message || "" });
    return NextResponse.json(
      {
        error: "Internal Server Error",
        ok: false,
        message: "Error updating profile",
      },
      { status: 500 }
    );
  }
}
