import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string({
      error: "Name is required.",
    })
    .min(3, "Name must have at least 3 characters.")
    .max(65, "Name must have at most 65 characters."),

  email: z
    .string({
      error: "Email is required.",
    })
    .email("Invalid email."),

  password: z
    .string({
      error: "Password is required.",
    })
    .min(8, "Password must have at least 8 characters."),
});

export const loginSchema = z.object({
  email: z
    .string({
      error: "Email is required."
    })
    .email("Invalid email."),
  password: z
  .string({
    error: "Password is required."
  })
  .min(8, "Password must have at least 8 characters.")
})

export const profileSchema = z.object({
  name: z
  .string({
    error: "Name is required"
  })
  .min(3,"Name must have at least 3 characters"),
  email: z
  .string({
    error: "Email is required."
  })
  .email("Invalid email."),
  password:z
  .string({
    error: "Password is required."
  })
  .min(8,"Password must have at least 8 characteres")
  
}).partial();