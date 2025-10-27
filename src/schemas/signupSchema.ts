import { z } from "zod";

const optionalString = z.string().min(2).optional().or(z.literal(""));

export const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email({ message: "Invalid email address" }),
  password: z.string().min(6, "Password must be at least 6 characters"),
  bio: optionalString,
  profilePic: z.url().optional().or(z.literal("")),
  currentFocus: optionalString,
  subjects: z.array(z.string()).min(1, "Please add at least one subject"),
});
