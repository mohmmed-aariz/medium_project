import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify} from 'hono/jwt'
import { JWTPayload } from "hono/utils/jwt/types";
import { createBlogInput, updateBlogInput } from "@mohmmed_aariz/medium-common";

export interface Env {
	DATABASE_URL: string;
    JWT_SECRET: string;
}

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string
    },
    Variables: {
        userId: string;
    }
}>();

// // ideally you should add pagination to this endpoint and not return all the blogs so it should return first 10 blogs or so
// // and the user can ask for more as they scroll down the window
// blogRouter.get('/bulk', async (c) => {
//     const prisma = new PrismaClient({
//         datasourceUrl: c.env.DATABASE_URL,
//     }).$extends(withAccelerate())

//     const blogs = await prisma.post.findMany(); // no conditions means give me all the blogs
    
//     return c.json({
//         blog: blogs,
//     })
// })

// blogRouter.use("/*") // it tells use the middleware any time a request comes anywhere to this router, we will do a bunch of authentication checks here
blogRouter.use('/*', async (c, next) => {
    //  somehow extract the userId and pass it down to the route Handler
    const authHeader = c.req.header("authorization") || ""; // we added empty string here telling if the header is undefined then please default to empty string. // so as to remove type error

    try{
        const user = await verify(authHeader, c.env.JWT_SECRET);
    
        if(user){   
            // c.set('userId', user.id); // it errors out because context dosen't have userId as a key. So we need to explicitly define the extra keys that we are adding to context in section Variable
            c.set('userId', user.id as string); 
            await next();
        } else{
            c.status(403);
            return c.json({
                message: "you are not logged in"
            })
        }
        next();
    } catch(e) {
        console.log(e);
        c.status(403);
        return c.json({
            message: "you are not logged in/ jwt is not correct"
        })
    }
})

blogRouter.post('/', async (c) => {
    const body = await c.req.json();
    const {success} = createBlogInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            message: "Inputs not correct/ zod validation failed"
        })
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const authorId = c.get("userId");

    const blog = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            // authorId: "we will extract it using the middleware. middleware is  a place where you take token from the user and extract the userId from it and pass it from middleware to actual route handler"
            authorId: authorId
            // if id was a number then you could have done
            // authorId: Number(authorId) || parseInt(authorId)
        }
    })
    
    return c.json({
        "id": blog.id,
    })
})

blogRouter.put('/', async (c) => {
    const body = await c.req.json();
    const { success } = updateBlogInput.safeParse(body);

    if(!success){
        c.status(411);
        return c.json({
            message: "Inputs not correct / Zod validation failed"
        })
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())


    const blog = await prisma.post.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content,
        }
    })
    
    return c.json({
        "id": blog.id,
    })
})

// ideally you should add pagination to this endpoint and not return all the blogs so it should return first 10 blogs or so
// and the user can ask for more as they scroll down the window
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blogs_ = await prisma.post.findMany(); // no conditions means give me all the blogs
    
    return c.json({
        blog: blogs_,
    })
})

// body make no sence in get request. you should use either params / query params
blogRouter.get('/:id', async (c) => {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    // const body = await c.req.json();

    try {
        const blog = await prisma.post.findFirst({
            where: {
                id: "a1a692fc-ea3a-4e3b-a4c9-f17f55791cfe"
            }
        })
        
        return c.json({
            blog: blog
        })
    }
    catch(e){
        console.log(e);
        c.status(403);
        return c.json({
            message: "error while fetching blog post"
        })
    }

})

// // ideally you should add pagination to this endpoint and not return all the blogs so it should return first 10 blogs or so
// // and the user can ask for more as they scroll down the window
// blogRouter.get('/bulk', async (c) => {
//     const prisma = new PrismaClient({
//         datasourceUrl: c.env.DATABASE_URL,
//     }).$extends(withAccelerate())

//     const blogs_ = await prisma.post.findMany(); // no conditions means give me all the blogs
    
//     return c.json({
//         blog: blogs_,
//         msg: "hellos" 
//     })
// })