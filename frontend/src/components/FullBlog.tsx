import { Blog } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }: {blog: Blog }) => {
    return <div>
        <AppBar />
        <div className="flex justify-center ">
            <div className="grid grid-cols-12 px-10 pt-12 max-w-screen-xl w-full">
                <div className="col-span-8 ">
                    <div className="text-4xl font-extrabold">
                        {blog.title }
                    </div>
                    <div className="text-slate-500 pt-2">
                        Post on "date"
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                    
                </div>

                <div className="col-span-4 ">
                    <div className="text-slate-600 text-lg font-semibold">
                        Author
                    </div>
                    <div className="flex">
                        <div className="pl-2 flex flex-col justify-center pr-4">
                            <Avatar name={blog.author.name || "Anonymous"} size="big"/>
                        </div>
                        <div>
                            <div className="text-xl font-bold pt-2">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                Ramdom catch phrase about the author's ability to grab the user's attention
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
}

// you should default the username:: Anonymous at the backend or at the hook 