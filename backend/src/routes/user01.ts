import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify} from 'hono/jwt'
import { z } from "zod"

export interface Env {
	DATABASE_URL: string;
    JWT_SECRET: string;
}

const signupInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional()
})

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();

userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    // console.log(c.env.DATABASE_URL);
    // console.log(c.env.JWT_SECRET);
  
    const body = await c.req.json();
    // zod for validation and hashed the password
    // the body that the user is sending you is something that you should senatize => you make sure that the body follows a certain format

    const {success} = signupInput.safeParse(body);

    if(!success){
      c.status(411);
      return c.json({
        message: "Inputs not correct/ zod validation failed"
      })
    }
  
    try{
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password
        }
      })
      
      const jwt = await sign({
        id: user.id
      }, c.env.JWT_SECRET)
  
      return c.json({
        jwt: jwt
      })
    }
    catch(e){
      console.log(e);
      c.status(411);
      return c.text('User already exists with this email/ Invalid') // handles duplicate email
    }
  })
  
  
  userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
  
    const body = await c.req.json();
    // zod for validation and hashed the password
  
    try{
      const user = await prisma.user.findFirst({
        where: {
          email: body.email,
          password: body.password
        }
      })
  
      if(!user){
        c.status(403); // status code for unauthorised
        return c.text("User don't exist/Incorrect creds")
      }
      
      const jwt = await sign({
        id: user.id
      }, c.env.JWT_SECRET)
  
      return c.json({
        jwt: jwt
      })
    }
    catch(e){
      console.log(e);
      c.status(411);
      return c.text('User already exists with this email/ Invalid') // handles duplicate email
    }
  })