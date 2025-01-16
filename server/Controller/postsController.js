const posts=require('../Model/postSchema')
exports.AddPosts=async(req,res)=>{
    const {title,description,image}=req.body
    console.log(req.body);
    try{

        const data=new posts({
            title:title,
            description:description,
            image:image
        })
        const response=await data.save()
        res.status(200).json(data)
    }
    catch(err){
        res.status(400).json(err)
    }
}