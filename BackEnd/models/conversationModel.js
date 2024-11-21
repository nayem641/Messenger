const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "messengerUsers",
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Messages",
        default:[]
      }]
  },
  { timestamps: true }
);

const Conversations = mongoose.model("Conversations", conversationSchema);

module.exports = Conversations;