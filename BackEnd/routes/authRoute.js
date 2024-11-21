const { login, logout, signup } = require("../controllers/authController")

const router=require("express").Router()

router.post('/signup',signup)
router.post('/login',login)
router.post('/logout',logout)

module.exports = router