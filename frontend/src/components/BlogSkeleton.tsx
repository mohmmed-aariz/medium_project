
// export const BLogSkeleton = ()=> {
//     return <div>  
//         <div role="status" className="max-w-sm animate-pulse">
//             <div className="p-4 border-b-2 border-slate-200 pb-4 max-w-lg md:max-w-screen-md cursor-pointer">
//                 <div className="flex ">
//                     <div className="flex justify-center flex-col">
//                         {/* <Avatar name={ authorName } /> */}
//                         <div className="h-4 w-4 bg-gray-200 rounded-full   mb-4"></div>
//                     </div>
//                     <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
//                         {/* {authorName}  */}
//                         <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
//                     </div>
//                     <div className="pl-2 pr-2 text-slate-600 flex justify-center flex-col">
//                         &middot; 
//                     </div>
//                     <div className="font-thin text-slate-400 text-sm flex justify-center flex-col">
//                         {/* {publishedDate} */}
//                         <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
//                     </div>
//                 </div>

//                 <div className="text-xl font-semibold pt-2">
//                     {/* {title} */}
//                     <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
//                 </div>

//                 <div className="text-md font-thin">
//                     {/* {content.slice(0,100) + "..." } */}
//                     <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
//                 </div>

//                 <div className="text-slate-500 text-sm font-thin pt-4">
//                     {/* {`${Math.ceil(content.length / 100)} minute(s) read`} */}
//                     <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
//                 </div>
//             </div>
//             {/* <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
//             <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
//             <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
//             <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
//             <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
//             <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div> */}
//             <span className="sr-only">Loading...</span>
//         </div>
//     </div>
// }



export const BlogSkeleton = () => {
    return <div role="status" className="animate-pulse flex justify-center">
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <div className="h-4 w-4 bg-gray-200 rounded-full mb-4"></div>
                {/* <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div> */}
                <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
                <div className="h-4 w-4 bg-gray-200 rounded-full w-48 mb-4"></div>
                <div className="flex justify-center flex-col pl-2 flex justify-center flex-col"></div>
            </div>
            <div className="text-xl font-semibold pt-2">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="text-md font-thin">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="text-slate-500 text-sm font-thin pt-4">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
        </div>
    <span className="sr-only">Loading...</span>
</div>
}