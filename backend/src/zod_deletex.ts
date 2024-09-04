// import { z } from "zod"

// export const signupInput = z.object({
//   username: z.string().email(),
//   password: z.string().min(6),
//   name: z.string().optional()
// })

// // the problem comes when you need these types on the frontend
// // for this we use type inference in zod:: which says "given theis signupInput, you can actually abstract this type which looks something like this which we can use on frontend"

// export type SingupInput = z.infer<typeof signupInput>