const express = require('express')
const PostRouter=express.Router()
const postModel=require('../schema/post')

PostRouter.get('/', async(req, res)=>{
    let device = req.params.device
    let posts;
    if(device){
         posts= await postModel.find({creator:req.body.creator,device:device})
    }else{
         posts= await postModel.find({creator:req.body.creator})
    }
    res.json(posts)
})
PostRouter.post('/', async(req, res)=>{
    let post = await postModel.create(req.body)
    res.send({message:"post created successfully",post})
})
PostRouter.put('/update/:id', async(req, res)=>{
    let post = await postModel.findOne({_id:req.params.id})
   
    if(req.body.creator===post.creator.toString()){
        let post = await postModel.updateOne({_id:req.params.id},req.body)
        res.send({message:"post updated successfully",post})
    }
    else{
        res.send({message:"you cannot update"})
    }
})
PostRouter.delete('/delete/:id', async(req, res)=>{
    console.log('hii')
    let post = await postModel.findOne({_id:req.params.id})
    if(req.body.creator===post.creator.toString()){
        let post = await postModel.deleteOne({_id:req.params.id})
        res.send({message:"post deleted successfully",post})
    }
    else{
        res.send({message:"you cannot delete"})
    }
})

module.exports = PostRouter
