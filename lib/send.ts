"use server";

import { z } from "zod";
import { ContactFormSchema, contactFormSchema } from "@/lib/form-validation";
import { ContactFormTemplate } from "@/components/emails/contact-form-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export default async function submitForm(formData: ContactFormSchema) {
  try {
    //validate the FormData
    // const validatedFields = contactFormSchema.parse({
    //   name: formData.get("name"),
    //   email: formData.get("email"),
    //   phone: formData.get("phone"),
    //   position: formData.get("position"),
    //   subject: formData.get("subject"),
    //   message: formData.get("message"),
    // });
    const { data, error } = await resend.emails.send({
      from: "Access Virtual Staffing Website <onboarding@resend.dev>",
      to: ["sgragg5619@gmail.com"],
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

    // if (data) {
    //   console.log(data);
    // }
    // console.log("submitForm: started", formData);

    // Return early if the form data is invalid
    return {
      errors: null,
      success:
        "We received your message and we will get back to you soon. Thank you!",
    };
  } catch (error) {
    // console.log(error);
    return {
      errors: {
        message: "An unexpected error occurred. Could not submit form.",
      },
      data: null,
    };
  }
}
