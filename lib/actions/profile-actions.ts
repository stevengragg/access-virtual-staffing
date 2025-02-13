import * as z from "zod";

export const editProfileSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    whyFit: z.string().min(1, "This field is required"),
    whatStrengths: z.string().min(1, "This field is required"),
    whatNeedImprovement: z.string().min(1, "This field is required"),
    address: z.string().min(1, "Address is required"),
    mobileNumber: z
      .array(z.string().min(10, "Mobile number must have at least 10 digits").regex(/^\d+$/, "Only numbers allowed")),
    emailAddress: z.array(
        z.object({
            type: z.string().min(1, "Email type is required"), 
            email: z.string().email("Invalid email"),
        })
    ),
    skypeId: z.string().min(1, "Skype ID is required"),
    dateOfBirth: z
      .coerce.date()
      .refine((date) => {
        const today = new Date();
        const age = today.getFullYear() - date.getFullYear();
        return age >= 18;
      }, "You must be at least 18 years old"),
    havePaypal: z.boolean().optional(),
    numberOfChildren: z.number().min(0, "Number of children is required"),
    videoLink: z
      .array(z.string().url("Invalid URL"))
      .refine((links) => links.every((link) => link.startsWith("https://")), "Links must start with 'https://'"),
    assessmentTest: z.array(z.string().optional()),
    internetProvider: z.string().min(1, "Internet provider is required"),
    numberOfMonitors: z.number().min(1, "This field is required"),
    numberOfExperience: z.number().min(1, "This field is required"),
    salaryUnit: z.string().min(1, "This field is required"),
    desiredSalary: z
      .number()
      .min(1000, "Salary must be at least 1,000")
      .max(1000000, "Salary must not exceed 1,000,000"),
    howKnow: z.string().optional(),
    workSamples: z.array(z.string().optional()),
    howHear: z.string().optional(),
    someoneName: z.string().optional(),
    referrer: z.string().optional(),
});


export type EditProfileSchema = z.infer<typeof editProfileSchema>;


export const onSubmit = (data: EditProfileSchema) => {
    console.log("Form submitted:", data);
};