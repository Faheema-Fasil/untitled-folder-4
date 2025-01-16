import axios from 'axios';

export const CommonAPI=async(httpRequest,URL,reqBody,reqHeader)=>{
    const reqConfig={
        method:httpRequest,
        url:URL,
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