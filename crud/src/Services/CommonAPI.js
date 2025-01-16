import axios from 'axios';
import { server_URL } from './serverurl';
export const CommonAPI=async(httpRequest,url,reqBody,reqHeader)=>{
    const reqConfig={
        method:httpRequest,
        url:`${server_URL}`,
        data:reqBody,
        headers:reqHeader  || {
            'Content-Type': 'application/json'
        }
    }    
    try {
        const response=await axios(reqConfig)
        return response.data
    } catch (error) {
        return error
    }
}