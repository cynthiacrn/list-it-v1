import { object, string } from "zod"

export const signInSchema = object({
  email: string({ required_error: "Email is required" })
    .email({ message: "Invalid email" }),
  password: string({ required_error: "Password is required" }),
})

export const signUpSchema = object({
  firstName: string().optional(),
  lastName: string().optional(),
  email: string().email({ message: "Invalid email address" }),
  password: string()
    .min(8, { message: "Password must be at least 8 characters long, at least one uppercase letter and at least one special character" })
    .regex(/[A-Z]/, { message: "Password must be at least 8 characters long, at least one uppercase letter and at least one special character" })
    .regex(/[\W_]/, { message: "Password must be at least 8 characters long, at least one uppercase letter and at least one special character" }),
})
