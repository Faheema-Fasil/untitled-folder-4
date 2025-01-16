const  router=require('express').Router();
const postsController=require('../Controller/postsController')
router.post('/posts',postsController.AddPosts)
module.exports=router