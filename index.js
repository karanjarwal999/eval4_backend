const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const userRouter= require('./router/UresrRouter')
const PostRouter= require('./router/PostRouter')
const Auth= require('./authMiddleware')

app.use(express.json())
app.get('/', (req, res) => {
    res.send('welcome!')
})
app.use('/users',userRouter)
app.use('/posts',Auth,PostRouter)

app.listen(process.env.PORT,async ()=>{
    console.log(`listening on port ${process.env.PORT}`)
    try {
        mongoose.connect(process.env.MONGOURL)
        console.log('connected')
        
    } catch (error) {
        console.log(`error connecting `)
    }
})