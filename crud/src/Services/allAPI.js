import { CommonAPI } from "./CommonAPI";
import { server_URL } from "./serverurl";


export const AddPosts=async(data)=>{
    return await CommonAPI("POST",`${server_URL}/posts`,data,"")
}

export const getPosts=async()=>{
    return await CommonAPI("GET",`${server_URL}/posts`,"","")
}
export const EditPosts=async(data)=>{
    return await CommonAPI("PUT",`${server_URL}/posts/${data.id}`,data,"")
}