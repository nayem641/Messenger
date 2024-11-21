const Conversations = require("../models/conversationModel")
const Messages = require("../models/messageModel")

const sendMessage=async(req,res)=>{
    try {
		const { message } = req.body;
		const { id: receiverId } = req.params;
		const senderId = req.user._id;

		let conversation = await Conversations.findOne({
			participants: { $all: [senderId, receiverId] },
		});

		if (!conversation) {
			conversation = await Conversations.create({
				participants: [senderId, receiverId],
			});
		}

		const newMessage = new Messages({
			senderId,
			receiverId,
			message,
		});

		if (newMessage) {
			conversation.messages.push(newMessage._id);
		}

		// await conversation.save();
		// await newMessage.save();

		// this will run in parallel
		await Promise.all([conversation.save(), newMessage.save()]);


		res.status(201).json(newMessage);
	} catch (error) {
		console.log("Error in sendMessage controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
}
const getMessage=async (req, res) => {
    try {
        const { id :userChatId} = req.params;
        const senderId=req.user._id;
     const conversation=await Conversations.findOne({
        participants:{$all:[senderId,userChatId]},

     }).populate("messages")
     if(!conversation){
         return res.status(200).json([]);
     }
     const messages = conversation.messages
     res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessage controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports={sendMessage,getMessage}