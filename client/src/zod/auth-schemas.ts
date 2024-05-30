import { z } from "zod";

export const loginSchema = z.object({
  emailOrUsername: z.string().min(1, "Please enter your email or username"),
  password: z.string().min(1, "Password is required"),
});
