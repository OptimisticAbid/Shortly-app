import { z } from "zod"

export const registerSchema = z.object({
    name: z.string()
           .trim()
           .min(1, "Name is required")
           .max(50, "name cannot exceed 50 characters"),

    email: z.string()
            .email("Enter valid email"),

    password: z.string()
                .min(4, "Password should be atleast 4 characters"),
})

export const loginSchema = z.object({
    email: z.string()
            .email("Enter valid email"),

    password: z.string()
               .min(4, "Password should be atleast 4 characters"),
})


export const updateUserSchema = z.object({
    name: z.string()
           .trim()
           .min(1, "Name is required")
           .max(50, "name cannot exceed 50 characters"),
    
    email: z.string()
            .email("Enter valid email"),
})

