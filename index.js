const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const userRouter= require('./router/UresrRouter')
const CURDRoute= require('./router/CURDRoute')
const Auth= require('./authMiddleware')

app.use(express.json())

app.use('/',CURDRoute)
app.use('/users',userRouter)

app.listen(process.env.PORT,async ()=>{
    console.log(`listening on port ${process.env.PORT}`)
    try {
        mongoose.connect(process.env.MONGOURL)
        console.log('connected')
        
    } catch (error) {
        console.log(`error connecting `)
    }
})