const jwt = require('jsonwebtoken')
 const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,//mili seconds
        httpOnly: true,//prevent XSS attacks
        secure: process.env.NODE_ENV !=="development",
        sameSite: "strict"//to prevent CSRF attacks
    })
    return token;
}
module.exports ={generateToken}