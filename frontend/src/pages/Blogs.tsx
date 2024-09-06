import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const {loading, blogs} = useBlogs();

    if(loading) {
        return <div>
            loading...
        </div>
    }
    return <div>
                <AppBar />
                <div className="flex justify-center">
                <div className="">
                    {blogs.map(blog => <BlogCard 
                    title={blog.title} authorName={blog.author.name || "Anonymous"} content={blog.content} publishedDate={"2nd august"} id={blog.id} />)}
                    {/* <BlogCard title="How an ugly single page website makes $5000 a month without affiliate marketting" authorName="Mohmmed Aariz" content="How an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate marketting" publishedDate="1/1/24" />
                    <BlogCard title="How an ugly single page website makes $5000 a month without affiliate marketting" authorName="Mohmmed Aariz" content="How an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate marketting" publishedDate="1/1/24" />
                    <BlogCard title="How an ugly single page website makes $5000 a month without affiliate marketting" authorName="Mohmmed Aariz" content="How an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate marketting" publishedDate="1/1/24" />
                    <BlogCard title="How an ugly single page website makes $5000 a month without affiliate marketting" authorName="Mohmmed Aariz" content="How an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate marketting" publishedDate="1/1/24" />
                    <BlogCard title="How an ugly single page website makes $5000 a month without affiliate marketting" authorName="Mohmmed Aariz" content="How an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate marketting" publishedDate="1/1/24" />
                    <BlogCard title="How an ugly single page website makes $5000 a month without affiliate marketting" authorName="Mohmmed Aariz" content="How an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate marketting" publishedDate="1/1/24" /> */}
                    <BlogCard title="How an ugly single page website makes $5000 a month without affiliate marketting" authorName="Mohmmed Aariz" content="How an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate marketting" publishedDate="1/1/24" id={"default"} />
                </div>
            </div>
        </div>
}


