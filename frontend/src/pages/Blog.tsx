// import { useParams } from "react-router-dom"
// import { useBlog } from "../hooks"
// import { FullBlog } from "../components/FullBlog";


// export const Blog = () => {
//     const { id } = useParams() ;
//     // const { loading, blog } = useBlog({id: id || ""});
//     const {loading, blog} = useBlog({
//         id: id || ""
//     });
//     const newBlog = blog || BlogDefault;

//     if(loading){
//         return  <div>
//             loading...
//         </div>
//     }

//     return <div>
//         {/* {newBlog.id || BlogDefault.id} */}
//         {/* <FullBlog blog={blog || BlogDefault}  /> */}
//         <FullBlog blog={newBlog}  />
//     </div>
// }

// const BlogDefault =  {
//     "content": "string",
//     "title": "string",
//     "id": "string",
//     "author": {
//         "name": "string"  
//     }
// }

import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog";
import { FullBlogSkeleton } from "../components/FullBlogSkeleton";
import { AppBar } from "../components/AppBar";


export const Blog = () => {
    const { id } = useParams() ;
    // const { loading, blog } = useBlog({id: id || ""});
    const {loading, blog} = useBlog({
        id: id || ""
    });

    if(loading || !blog){
        return  <div>
            <AppBar />
            {/* loading... */}
            <FullBlogSkeleton />
        </div>
    }

    return <div>
        {/* {newBlog.id || BlogDefault.id} */}
        {/* <FullBlog blog={blog || BlogDefault}  /> */}
        <FullBlog blog={blog}  />
    </div>
}




