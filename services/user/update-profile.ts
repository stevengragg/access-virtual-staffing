import {
  isValidPhoneNumber,
  isPossiblePhoneNumber,
} from "react-phone-number-input";
import * as z from "zod";

const urlSchema = z
  .string()
  .url("Invalid URL format. Must be a valid web address.")
  .regex(
    /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
    "URL must be a valid website with a proper domain"
  );

// Main Schema
export const editProfileSchema = z.object({
  jobTitle: z.string().min(1, "This field is required"),
  whyFit: z.string().min(1, "This field is required"),
  whatStrengths: z.string().min(1, "This field is required"),
  whatNeedImprovement: z.string().min(1, "This field is required"),
  address: z.string().min(1, "This field is required"),
  phone: z
    .array(
      z.object({
        number: z
          .string()
          .min(1, "This field is required")
          .refine((num) => num === "" || isPossiblePhoneNumber(num), {
            message: "Please provide a valid phone number",
          }),
        type: z.string().min(1, "This field is required"),
      })
    )
    .min(1, "This field is required"),
  emailAddress: z
    .array(
      z.object({
        address: z
          .string()
          .email("Invalid email format")
          .min(1, "This field is required"),
        type: z.string().min(1, "This field is required"),
      })
    )
    .min(1, "At least one email address is required"),
  skypeId: z.string().min(1, "This field is required"),
  dateOfBirth: z.coerce.date().refine(
    (date) => {
      const today = new Date();
      const age = today.getFullYear() - date.getFullYear();
      return age >= 18;
    },
    { message: "You must be at least 18 years old" }
  ),
  hasPaypal: z.string().optional(),
  contentLinks: z
    .array(
      z.object({
        link: z
          .string()
          .url(
            "Each content link must be a valid URL starting with 'http://' or 'https://'"
          ),
      })
    )
    .min(1, "At least one content link is required"),
  numberOfChildren: z.string().min(1, "This field is required"),
  assessmentTests: z
    .array(
      z.object({
        link: z
          .string()
          .url(
            "Each assessment test link must be a valid URL starting with 'http://' or 'https://'"
          )
          .optional(),
      })
    )
    .optional(),
  internetProvider: z.string().min(1, "This field is required"),
  numberOfMonitors: z
    .string()
    .min(1, "This field is required")
    .regex(/^[0-9]+$/, "Number of monitors must be a valid number"),
  numberOfExperience: z
    .string()
    .min(1, "This field is required")
    .regex(/^[0-9]+$/, "Experience must be a valid number"),
  salaryUnit: z.string().min(1, "This field is required"),
  desiredSalary: z.number().min(1, "This field is required"),
  workSamples: z
    .array(
      z.object({
        link: z
          .string()
          .url(
            "Each work sample link must be a valid URL starting with 'http://' or 'https://'"
          ),
      })
    )
    .min(1, "At least one work sample is required"),
  howHear: z.string().optional(),
  referrer: z.string().optional(),
} as const);

export type EditProfileSchema = z.infer<typeof editProfileSchema>;
