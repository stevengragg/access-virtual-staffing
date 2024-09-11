import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

export const contactFormSchema = z.object({
  name: z.string().optional(),
  email: z
    .string({
      required_error: "Please provide your email address",
      invalid_type_error: "Please provide your valid email address",
      message: "Please provide your valid email address",
    })
    .email({ message: "Please provide your valid email address" }),
  phone: z
    .string({
      required_error: "Please provide your US phone number",
      invalid_type_error: "Please provide your valid US phone number",
      message: "Please provide your valid US phone number",
    })
    .refine((arg) => isValidPhoneNumber(arg, "US"), {
      message: "Please provide your US phone number",
    }),
  position: z.string().optional(),
  subject: z.string().optional(),
  message: z
    .string({
      required_error: "Please specify your message",
      invalid_type_error: "Please specify your message",
      message: "Please specify your message",
    })
    .refine((arg) => arg !== "", {
      message: "Please specify your message",
    }),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
