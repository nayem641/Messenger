const mongoose=require("mongoose")
const messageSchema=new mongoose.Schema({
    
		senderId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		receiverId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		message: {
			type: String,
			required: true,
		},
		// createdAt, updatedAt
	},
	{ timestamps: true })

const Messages=mongoose.model("Messages",messageSchema)
module.exports = Messages