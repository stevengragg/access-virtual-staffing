import { isValidPhoneNumber } from "react-phone-number-input";
import * as z from "zod";

const urlSchema = z.string()
    .url("Invalid URL format. Must be a valid web address.")
    .regex(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/, "URL must be a valid website with a proper domain");

// Main Schema
export const editProfileSchema = z.object({
    fullName: z.string()
        .min(1, "Full name is required")
        .regex(/^[A-Za-z\s]+$/, "Full name must contain only letters and spaces"),

    whyFit: z.string().min(1, "This field is required"),
    whatStrengths: z.string().min(1, "This field is required"),
    whatNeedImprovement: z.string().min(1, "This field is required"),

    address: z.string().min(1, "Address is required"),

    phone: z.array(
        z.object({
            number: z
                .string()
                .refine((num) => num === "" || isValidPhoneNumber(num, "US"), {
                    message: "Please provide a valid US phone number",
                }),
            type: z.string().min(1, "Phone type is required"),
        })
    ).min(1, "At least one phone number is required"),

    emailAddress: z.array(
        z.object({
            address: z.string()
                .email("Invalid email format")
                .min(1, "Email address is required"),
            type: z.string().min(1, "Email type is required"),
        })
    ).min(1, "At least one email address is required"),

    skypeId: z.string().min(1, "Skype ID is required"),

    dateOfBirth: z
        .coerce.date()
        .refine((date) => {
            const today = new Date();
            const age = today.getFullYear() - date.getFullYear();
            return age >= 18;
        }, { message: "You must be at least 18 years old" }),

    hasPaypal: z.boolean().optional(),

    contentLinks: z.array(
        z.object({
            link: z.string().url("Each content link must be a valid URL starting with 'http://' or 'https://'")
        })
    ).min(1, "At least one content link is required"),

    numberOfChildren: z.number()
        .min(0, "Number of children cannot be negative")
        .max(20, "Number of children seems too high"),

    videoLinks: z.array(urlSchema)
        .refine((links) => links.every((link) => link.startsWith("https://")), {
            message: "All video links must use 'https://'",
        }),

    assessmentTests: z.array(
        z.object({
            link: z.string().url("Each assessment test link must be a valid URL starting with 'http://' or 'https://'")
        })
    ).min(1, "At least one assessment test link is required"),

    internetProvider: z.string().min(1, "Internet provider is required"),

    numberOfMonitors: z.string()
        .min(1, "This field is required")
        .regex(/^[0-9]+$/, "Number of monitors must be a valid number"),

    numberOfExperience: z.string()
        .min(1, "This field is required")
        .regex(/^[0-9]+$/, "Experience must be a valid number"),

    salaryUnit: z.string().min(1, "This field is required"),

    desiredSalary: z
        .number()
        .min(1000, "Salary must be at least 1,000")
        .max(1000000, "Salary must not exceed 1,000,000"),

    howKnow: z.string().optional(),
    
    workSamples: z.array(
        z.object({
            link: z.string().url("Each work sample link must be a valid URL starting with 'http://' or 'https://'")
        })
    ).min(1, "At least one work sample is required"),

    howHear: z.string().optional(),
    someoneName: z.string().optional(),
    referrer: z.string().optional(),
} as const);

export type EditProfileSchema = z.infer<typeof editProfileSchema>;

