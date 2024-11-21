const jwt= require("jsonwebtoken")
const messengerUsers = require("../models/userModel")
const protectRoute=async(req,res,next)=>{
    try {
        const token=req.cookies.jwt
        if(!token){
            return res.status(401).json({message:"Unauthorized, token is required"})
        }
        const decoded=jwt.verify(token,"jguftyAERWSRYTVDUY@/kjr")
        if(!decoded){
            return res.status(401).json({message:"Unauthorized, token is invalid"})
        }
        const user=await messengerUsers.findById(decoded.userId).select("-password")
        if(!user){
            return res.status(401).json({message:"Unauthorized, user does not exist"})
        }
        
        req.user=user
        next()
    } catch (error) {
        console.log("error in protect route:",error.message)
        res.status(401).json({message:"Not authorized, token is required"})
    }
}

module.exports=protectRoute