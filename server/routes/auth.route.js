const { SignUp, Login, Logout, UpdateProfile, CheckAuth } = require("../controllers/auth.controller")
const protectRoute = require("../middlewares/protectRoute")

const authRouter=require("express").Router()

authRouter.post("/signup",SignUp)

authRouter.post("/login",Login)
authRouter.post("/logout",Logout)
authRouter.post("/update-profile",protectRoute,UpdateProfile)

authRouter.get("/check",protectRoute,CheckAuth)


module.exports =authRouter
