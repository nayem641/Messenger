
const express = require('express')
const cookieParser=require('cookie-parser')
const router = require('./routes/authRoute')
const messengerUsers = require('./models/userModel')
const messageRouter = require('./routes/messageRoute')
const userRouter = require('./routes/userRoute')

require('dotenv').config()
const app=express()
const PORT=process.env.PORT||3000
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(cookieParser())

app.use("/api/auth",router)
app.use("/api/messages",messageRouter)
app.use("/api/users",userRouter)



app.delete("/",async(req,res)=>{
    await messengerUsers.deleteMany()
    res.json({message:"All users deleted"})  // to be changed to a success message or a status code 200
})
app.listen(PORT,()=>{
    require("./Database/mongoDBCloud")
    console.log(`server is running http://localhost:${PORT}`)
})  