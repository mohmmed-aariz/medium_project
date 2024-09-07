// import { AppBar } from "../components/AppBar"
// import { BlogCard } from "../components/BlogCard"
// import { BLogSkeleton } from "../components/BlogSkeleton";
// import { useBlogs } from "../hooks"

// export const Blogs = () => {
//     const {loading, blogs} = useBlogs();

//     if(loading) {
//         return <div>
//             {/* loading... */}
//             <BLogSkeleton />
//         </div>
//     }
//     return <div>
//                 <AppBar />
//                 <div className="flex justify-center">
//                 <div className="">
//                     {blogs.map(blog => <BlogCard 
//                     title={blog.title} authorName={blog.author.name || "Anonymous"} content={blog.content} publishedDate={"2nd august"} id={blog.id} />)}
//                     {/* <BlogCard title="How an ugly single page website makes $5000 a month without affiliate marketting" authorName="Mohmmed Aariz" content="How an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate marketting" publishedDate="1/1/24" />
//                     <BlogCard title="How an ugly single page website makes $5000 a month without affiliate marketting" authorName="Mohmmed Aariz" content="How an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate marketting" publishedDate="1/1/24" />
//                     <BlogCard title="How an ugly single page website makes $5000 a month without affiliate marketting" authorName="Mohmmed Aariz" content="How an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate marketting" publishedDate="1/1/24" />
//                     <BlogCard title="How an ugly single page website makes $5000 a month without affiliate marketting" authorName="Mohmmed Aariz" content="How an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate marketting" publishedDate="1/1/24" />
//                     <BlogCard title="How an ugly single page website makes $5000 a month without affiliate marketting" authorName="Mohmmed Aariz" content="How an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate marketting" publishedDate="1/1/24" />
//                     <BlogCard title="How an ugly single page website makes $5000 a month without affiliate marketting" authorName="Mohmmed Aariz" content="How an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate marketting" publishedDate="1/1/24" /> */}
//                     <BlogCard title="How an ugly single page website makes $5000 a month without affiliate marketting" authorName="Mohmmed Aariz" content="How an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate marketting" publishedDate="1/1/24" id={"default"} />
//                 </div>
//             </div>
//         </div>
// }

// // from here, to fetch a particular blog recoil/ atom is a best usecase as when we click on the blog for the first time we will see a loader there,
// // but when we open the same blog again, then we don't see a loader there. this is because of atom family

// // so the best idea won't be to store the blog in the local state but in atoms


import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const {loading, blogs} = useBlogs();

if(loading) {
        // return <div>
        //     loading...
        // </div>
    return <div>
        <AppBar />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
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

// from here, to fetch a particular blog recoil/ atom is a best usecase as when we click on the blog for the first time we will see a loader there,
// but when we open the same blog again, then we don't see a loader there. this is because of atom family

// so the best idea won't be to store the blog in the local state but in atoms