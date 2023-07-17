const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const userRouter= require('./router/UresrRouter')
const PostRouter= require('./router/PostRouter')
const Auth= require('./authMiddleware')

app.use(express.json())
app.use('/users',userRouter)
app.use('/posts',Auth,PostRouter)

app.listen(process.env.PORT,async ()=>{
    console.log(`listening on port ${process.env.PORT}`)
    try {
        mongoose.connect('mongodb+srv://karanjarwal999:Pass123@cluster0.csrraxt.mongodb.net/?retryWrites=true&w=majority')
        console.log('connected')
        
    } catch (error) {
        console.log(`error connecting `)
    }
})