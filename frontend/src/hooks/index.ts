import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import axios from "axios";

interface Blog {
    "content": string;
    "title": string;
    "id": string;
    "author": {
        "name": string  
    }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(()=>{
        // we cannot use async function inside an effect so we can either call another function or use .then syntax
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response => {
            setBlogs(response.data.blog);
            setLoading(false);
        })
    }, [])

    return {
        loading,
        blogs
    }
}