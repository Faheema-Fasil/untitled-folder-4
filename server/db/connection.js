const mongoose=require('mongoose');      
const connectn=process.env.connection

mongoose.connect(connectn).then(()=>{
    console.log("db connected")
}).catch((err)=>{
    console.log(err)
})