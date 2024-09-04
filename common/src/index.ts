import { z } from "zod"

// the problem comes when you need these types on the frontend
// for this we use type inference in zod:: which says "given theis signupInput, you can actually abstract this type which looks something like this which we can use on frontend"

export const signupInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional()
})

export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export const createBlogInput = z.object({
    title: z.string(),
    content: z.string()
})

export const updateBlogInput = z.object({
    title: z.string(),
    contnet: z.string(),
    id: z.string()
})


export type SingupInput = z.infer<typeof signupInput>
export type SinginInput = z.infer<typeof signinInput>
export type CreateBlogInput = z.infer<typeof createBlogInput>
export type UpdateBlogInput = z.infer<typeof updateBlogInput>

// you could even structure it a little better