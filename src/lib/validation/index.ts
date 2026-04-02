import * as z from "zod";

//  THis file is used to define the validation schema for the sign up form using zod.

//1. SignUpValidationSchema is a zod object schema that defines the validation rules for the sign up form fields.
export const SignUpValidationSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name must be less than 50 characters long" }),
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters long" })
    .max(20, { message: "Username must be less than 20 characters long" }),
  email: z.string().email({ message: `Invalid email address` }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(30, { message: "Password must be less than 30 characters long" }),
});
