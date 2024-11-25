const mongoose=require("mongoose")

mongoose.connect(process.env.MONGODB)
.then(()=>{
    console.log("MongoDB connected ")
})
.catch((err)=>console.error(err))