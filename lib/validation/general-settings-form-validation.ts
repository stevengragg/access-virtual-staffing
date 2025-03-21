import * as z from "zod";

export const generalSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .regex(/^[A-Za-z\s]+$/, "First name must contain only letters and spaces"),

  lastName: z
    .string()
    .min(1, "Last name is required")
    .regex(/^[A-Za-z\s]+$/, "Last name must contain only letters and spaces"),

  email: z.string().email("Invalid email format").min(1, "Email is required"),

  pfp: z
    .instanceof(File, { message: "Profile picture must be a valid file" })
    .optional(),
  // Remove optional when pfp is already implemented

  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    ),
});

export type GeneralSchema = z.infer<typeof generalSchema>;
