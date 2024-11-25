const mongoose=require('mongoose');
const messageSchema=new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    text: {
        type: String,
        
    },
    image: {
       type:String,
    }
},{timestamps:true})

const Message=mongoose.model('Messages',messageSchema)
module.exports=Message