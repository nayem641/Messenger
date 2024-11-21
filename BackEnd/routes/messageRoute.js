const { sendMessage, getMessage } = require("../controllers/messageController")
const protectRoute = require("../middlewares/protectRoute")

const messageRouter=require("express").Router()
messageRouter.post("/send/:id",protectRoute,sendMessage)
messageRouter.get("/:id",protectRoute,getMessage)

module.exports=messageRouter 