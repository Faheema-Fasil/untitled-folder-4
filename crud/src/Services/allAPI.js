import { CommonAPI } from "./CommonAPI";
import { server_URL } from "./serverurl";


export const AddPosts=async(data)=>{
    return await CommonAPI("POST",`${server_URL}/posts`,data,"")
}