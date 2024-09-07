import axios from "axios"
import { AppBar } from "./AppBar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = ()=> {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    return <div>
        <AppBar />
        <div className="flex justify-center pt-8">
            <div className="mx-10 w-full ">
                {/* <label  className="block mb-2 text-sm font-medium text-gray-900 ">Your message</label> */}
                <textarea onChange={(e) => { setTitle(e.target.value)}} className="focus:outline-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Title..."></textarea>

                <TextEditor onChange={(e) => { setDescription(e.target.value)}} />

                <button onClick={async () => {
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                        title,
                        content: description,
                    }, {
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    }
                );
                    navigate(`/blog/${response.data.id}`)
                }} type="submit" className="pt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800">
                    Publish post
                </button>
            </div>
            
        </div>
    </div>
} 

function TextEditor({onChange}: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}){
   return <div className="my-2">
        <div className="w-full mb-4 border border-gray-200 rounded-lg">
            <div className="px-4 py-2 bg-white rounded-b-lg ">
                <textarea onChange={onChange} rows={8} className="focus:outline-none pl-2 block w-full px-0 text-sm text-gray-800 bg-white   " placeholder="Write an article..." required ></textarea>
            </div>
        </div>
   </div> 
}