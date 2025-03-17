import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";
import { db } from "@/database"; // Assuming db is exported from your database configuration file
import {
  profiles,
  phones,
  emails,
  contentLinks,
  videoLinks,
  assessmentTests,
  workSamples,
} from "@/database/schema/profiles";

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
    console.log(body);

    // Insert profile details into the database
    const profile = await db
      .insert(profiles)
      .values({
        jobtitle: body.jobTitle,
        userId: session.user.sub, // Assuming user ID is stored in session
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

    const profileId = profile[0].id;

    // Insert phones
    await Promise.all(
      body.phone.map((phone: any) =>
        db.insert(phones).values({
          profileId,
          number: phone.number,
          type: phone.type,
        })
      )
    );

    // Insert emails
    await Promise.all(
      body.emailAddress.map((email: any) =>
        db.insert(emails).values({
          profileId,
          address: email.address,
          type: email.type,
        })
      )
    );

    // Insert content links
    await Promise.all(
      body.contentLinks.map((link: any) =>
        db.insert(contentLinks).values({
          profileId,
          link: link.link,
        })
      )
    );

    // Insert assessment tests
    await Promise.all(
      body.assessmentTests.map((test: any) =>
        db.insert(assessmentTests).values({
          profileId,
          link: test.link,
        })
      )
    );

    // Insert work samples
    await Promise.all(
      body.workSamples.map((sample: any) =>
        db.insert(workSamples).values({
          profileId,
          link: sample.link,
        })
      )
    );

    // Proceed with your logic for authenticated users
    return NextResponse.json({
      message: "Profile updated successfully",
      ok: true,
    });
  } catch (error) {
    console.error("Error updating profile:", error);
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
