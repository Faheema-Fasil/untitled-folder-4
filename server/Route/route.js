
const  router=require('express').Router();
const postsController=require('../Controller/postsController')
router.post('/posts',postsController.AddPosts)
router.get('/posts',postsController.getPosts)
router.put('/posts/:id',postsController.EditPosts)
router.delete('/posts/:id',postsController.DeletePosts)
module.exports=router