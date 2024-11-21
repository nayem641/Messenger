const mongoose = require('mongoose')
const userSchema=new mongoose.Schema({
    fullName:{type: String},
    username:{type:String},
    password:{type:String,required:true},
    email:{type:String},
    gender:{type:String},
    profilePic:{type:String,default:""}
},{
    timestamps: true,
 
})
const messengerUsers=mongoose.model("messengerUsers",userSchema)
module.exports = messengerUsers