import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

import { db } from "@/database";
import { users } from "@/database/schema";
import { createNotification } from "@/database/mutations/job_applicants";
import { sendEmailNotification } from "@/services/send-email-notif";

export async function POST(req: Request) {
  try {
    const { user_id, email, name, picture, given_name, family_name, provider } =
      await req.json();
    console.log({ user_id, email, name, picture, given_name, family_name });

    const existingUser = await db.query.users.findFirst({
      where: eq(users.userId, user_id),
    });

    if (!existingUser) {
      const user = await db
        .insert(users)
        .values({
          userId: user_id,
          email,
          firstName: given_name ?? "",
          lastName: family_name ?? "",
          name,
          profileImage: picture ?? "",
          provider,
        })
        .returning({ userId: users.id });

      createNotification(
        user[0].userId,
        "Welcome to AVS Applicant Portal! Setup your profile and start exploring jobs.",
        "info",
        "#"
      );

      sendEmailNotification({
        to: [email],
        subject: "Welcome to AVS Applicant Portal",
        message:
          "Welcome to AVS Applicant Portal! Setup your profile and start exploring jobs.",
        footer:
          "If you have any questions, feel free to reach out 👉 support@accessvirtualstaffing.com",
      });
    }

    return NextResponse.json({
      message: "User record created",
    });
  } catch (error) {
    console.error("Auth0 callback error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
