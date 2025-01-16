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
exports.getPosts=async(req,res)=>{
    try{
        const response=await posts.find()
        res.status(200).json(response)
    }
    catch(err){
        res.status(400).json(err)
    }
}
exports.EditPosts=async(req,res)=>{
    const {id}=req.params
    const {title,description,image}=req.body
    try{
        const response=await posts.findByIdAndUpdate(id,{title:title,description:description,image:image},{new:true})
        res.status(200).json(response)
    }
    catch(err){
        res.status(400).json(err)
    }
}
exports.DeletePosts=async(req,res)=>{
    const {id}=req.params
    try{
        const response=await posts.findByIdAndDelete(id)
        res.status(200).json(response)
    }
    catch(err){
        res.status(400).json(err)
    }
}