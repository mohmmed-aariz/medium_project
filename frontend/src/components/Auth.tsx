import { SignupInput } from "@mohmmed_aariz/medium-common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config";

// if you want to read about typesafety then read :: trpc project
export const Auth = ({ type }: {type: "signup" | "signin"}) => {
    const navigate = useNavigate();
    // another way to declare state variables
    const [postInputs, setPostInputs] = useState<SignupInput>({
        email: "",
        password: "",
        name: "",
    });

    async function sendRequest(){
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs); // as we are sending name even to signin component so it's better to make 2 seperate components or it will ignore name in signin route
            const jwt = response.data;
            localStorage.setItem("token", jwt.jwt);
            navigate("/blogs")
        } catch(e){
            // alert the user here that the request failed
            alert("Error while signing up");
        }
    }
    

    return <div className="h-screen flex justify-center flex-col">
        {/* to log post inputs:: */}
        {/* {JSON.stringify(postInputs)} */}
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold">
                        Create an account
                    </div>
                    <div className="text-slate-500">
                        {type === "signin" ? "Don't have an account?" : "Already have an account?"} 
                        <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                            {type === "signin" ? "Sign up" : "Sign in"}
                        </Link>
                    </div>
                </div>
                <div className="pt-4">
                    {type === "signup" ?  <LabelledInput lable="Name" placeholder="Mohmmed Aariz..." onChange={(e)=>{
                        // setPostInputs(c => ({
                        //     ...c,
                        //     name:e.target.value
                        // }))
                        // we can even call setPostInputs without function call
                        setPostInputs({
                            ...postInputs, // it means:: give me all the existing keys here, i.e. spread out the existing objects
                            name: e.target.value // and then override the name
                        })
                    }} /> : null}

                    

                    <LabelledInput lable="Username" placeholder="mohmmedaariz@gmail.com..." onChange={(e)=>{
                        setPostInputs({
                            ...postInputs, // it means:: give me all the existing keys here, i.e. spread out the existing objects
                            email: e.target.value // and then override the name
                        })
                    }} />

                    <LabelledInput lable="Password" type="password" placeholder="password..." onChange={(e)=>{
                        setPostInputs({
                            ...postInputs, // it means:: give me all the existing keys here, i.e. spread out the existing objects
                            password: e.target.value // and then override the name
                        })
                    }} />

                    <button onClick={sendRequest} type="button" className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        {type === "signup" ? "Sign up" : "Sign in"}
                    </button>

                </div>
            </div>
        </div>

    </div>
}

interface LabelledInputType {
    lable: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string
}

function LabelledInput({lable, placeholder, onChange, type}: LabelledInputType){
    return <div>
    <label className="block mb-2 text-sm font-semibold text-black pt-4">{lable}</label>
    <input type={type || "text"}  onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} />
</div>
}

// you should generally divide the auth component into two components, seperate for signup and signin 
// and try to reuse as many things as you can

// In summary, use the Navigate component for declarative navigation within your JSX, and the useNavigate hook for imperative navigation in response to events or side effects