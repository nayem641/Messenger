const User = require("../models/user.model")

const getUsersforSidebar=async(req,res)=>{
    try{
        const loggedInUser = req.user._id
        res.json(loggedInUser)
    }catch(error){
        console.error("Error in getting users for sidebar",error.message)
        res.status(500).json({message:"Internal Server Error"})
    }
}

module.exports={getUsersforSidebar}