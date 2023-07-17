const mongoose = require('mongoose')

const PostSchema= mongoose.Schema({
    title:{type:"string", required:true},
    body:{type:"string", required:true},
    device:{type:"string", required:true},
    creator:{type:mongoose.Schema.Types.ObjectId, required:true},
})

module.exports = mongoose.model('posts',PostSchema)