const jwt=require("jsonwebtoken")

const generateTokenAndSetCookie=async(userId,res)=>{
const token=jwt.sign({userId},"jguftyAERWSRYTVDUY@/kjr",{
    expiresIn:"1d"
})
res.cookie("jwt",token,{
    maxAge:1*24*60*60*1000  ,
    httpOnly:true,// is not accisible via js
    sameSite:"strict",
    secure:process.env.NODE_ENV !== "development"

})
}

module.exports=generateTokenAndSetCookie