import { Link } from "react-router-dom";

interface BlogCardProps {
    id: string;
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}
export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
        <div className="p-4 border-b-2 border-slate-200 pb-4 max-w-lg md:max-w-screen-md cursor-pointer">
            <div className="flex ">
                <div className="flex justify-center flex-col">
                    <Avatar name={ authorName } />
                </div>
                <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
                    {authorName} 
                </div>
                <div className="pl-2 pr-2 text-slate-600 flex justify-center flex-col">
                    &middot; 
                </div>
                <div className="font-thin text-slate-400 text-sm flex justify-center flex-col">
                    {publishedDate}
                </div>
            </div>

            <div className="text-xl font-semibold pt-2">
                {title}
            </div>

            <div className="text-md font-thin">
                {content.slice(0,100) + "..." }
            </div>

            <div className="text-slate-500 text-sm font-thin pt-4">
                {`${Math.ceil(content.length / 100)} minute(s) read`}
            </div>
        </div>
    </Link>
    
}

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }){
    return <div className={`relative inline-flex items-center justify-center ${size === "small" ? "w-6 h-6" : "w-10 h-10"} overflow-hidden bg-gray-300 rounded-full `}>
                <span className={`text-xs ${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-600 `}>{name[0].toUpperCase()}</span>
            </div>
}