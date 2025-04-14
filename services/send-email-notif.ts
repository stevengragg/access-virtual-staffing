"use server";

import { Resend } from "resend";
import EmailNotificationTemplate from "@/components/emails/email-notification-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailNotification({
  to,
  subject,
  message,
  footer,
}: {
  to: string[];
  subject: string;
  message: string;
  footer?: string;
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: `Access Virtual Staffing <${
        process.env.NEXT_NO_REPLY_EMAIL || "no-reply@accessvirtualstaffing.com"
      }>`,
      to,
      subject,
      react: EmailNotificationTemplate({
        title: subject,
        message,
        footer,
      }),
    });

    if (error) {
      return {
        errors: error,
        success: null,
      };
    }

    return {
      errors: null,
      success: "Email sent successfully.",
    };
  } catch (error) {
    return {
      errors: {
        message: "An unexpected error occurred. Could not send email.",
      },
      success: null,
    };
  }
}
