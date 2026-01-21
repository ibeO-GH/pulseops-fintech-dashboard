import { z } from "zod";

export const stepOneSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  role: z.enum(["admin", "manager", "staff"]),
});

export type StepOneData = z.infer<typeof stepOneSchema>;
