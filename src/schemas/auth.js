import { object, string } from "zod"

export const signInSchema = object({
  email: string({ required_error: "Email is required" })
    .email({ message: "Invalid email" }),
  password: string({ required_error: "Password is required" })
    .min(8, { message: "Password must be at least 6 characters long" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[\W_]/, { message: "Password must contain at least one special character" }),
})

export const testSchema = object({
  email: string(),
  password: string(),
})
