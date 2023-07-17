const mongoose = require('mongoose')

const registerSchema= mongoose.Schema({
    name:{type:"string", required:true},
    email:{type:"string", required:true},
    gender:{type:"string", required:true},
    password:{type:"string", required:true}
})

module.exports = mongoose.model('users',registerSchema)