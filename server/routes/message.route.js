const { getUsersforSidebar } = require("../controllers/message.controller")
const protectRoute = require("../middlewares/protectRoute")

const messageRoute=require("express").Router()

messageRoute.get("/users",protectRoute,getUsersforSidebar)

module.exports = messageRoute