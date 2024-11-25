const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
       
    },
    fullName: {
        type: String,
           },
    password: {
        type: String,
       
    },
    profilePic: {
        type: String,
        default: ''
    }

}, {
    timestamps: true
})

const User=mongoose.model('MessengerUsers',userSchema)
module.exports=User