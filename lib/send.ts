"use server";

import { Resend } from "resend";

import { ContactFormSchema } from "@/lib/validation/contact-form-validation";
import { ContactFormTemplate } from "@/components/emails/contact-form-template";

const resend = new Resend(process.env.RESEND_API_KEY);
export default async function submitForm(formData: ContactFormSchema) {
  try {
    const { data, error } = await resend.emails.send({
      from: `Access Virtual Staffing Website Visitor <${
        process.env.NEXT_NO_REPLY_EMAIL || "no-reply@accessvirtualstaffing.com"
      }>`,
      to: [
        process.env.NEXT_SUPPORT_EMAIL || "support@accessvirtualstaffing.com",
      ],
      subject: `Website Contact Form | Sent by ${formData.email} | ${
        formData.subject || "General Inquiry (No Subject)"
      }`,
      react: ContactFormTemplate({
        ...formData,
        origin: "Website Contact Form",
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
      success:
        "We received your message and we will get back to you soon. Thank you!",
    };
  } catch (error) {
    return {
      errors: {
        message: "An unexpected error occurred. Could not submit form.",
      },
      data: null,
    };
  }
}
