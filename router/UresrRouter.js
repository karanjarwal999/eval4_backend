const express = require('express')
const userRouter=express.Router()
const userModel=require('../schema/resgister')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

userRouter.post('/register', async (req, res)=>{
    req.body.password= await bcrypt.hash(req.body.password,8)
    const user= await userModel.create(req.body)
    console.log(user)
    res.status(200).send('Account created successfully')
})

userRouter.post('/login', async(req, res)=>{
    let user= await userModel.findOne({email: req.body.email})
    if(user){
        let password= await bcrypt.compare(req.body.password,user.password)
        if(password){
            let token= jwt.sign({'Id':user._id},process.env.JWTCODE)
            res.send({message:'login successful',token:token})
        }else{
            res.send({message:'invalid password'})
        }
    }else{
        res.send({message:'login failed'})
    }
})

module.exports = userRouter