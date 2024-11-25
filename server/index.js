const express = require("express")
const authRouter = require("./routes/auth.route")
const messageRoute = require("./routes/message.route")
require("dotenv").config()

const app = express()
const port = process.env.PORT || 3001
app.use(express.json())
app.use(express.urlencoded({extended: true}))

require("./helper/db")

app.use("/api/auth", authRouter)
app.use("/api/message",messageRoute)





//client error handler
app.use((req, res, next) => {
    const error = new Error("Not Found")
    error.status = 404
    next(error)
})
//error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Something broke!")
})

//start server
app.listen(port, () => console.log(`Server running on ${port}`))
