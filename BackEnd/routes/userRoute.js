const { getUsersForSideBar } = require("../controllers/userContriller");
const protectRoute = require("../middlewares/protectRoute");
const messengerUsers = require("../models/userModel");

const userRouter = require("express").Router();
userRouter.get("/",protectRoute, getUsersForSideBar);
module.exports = userRouter;
 