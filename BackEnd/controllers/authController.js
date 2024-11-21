const messengerUsers = require("../models/userModel");

const bcrypt = require("bcryptjs");
const generateTokenAndSetCookie = require("../utils/genarateToken");

const signup = async (req, res) => {
  try {
    const { fullName, username, email, password, confirmPassword, gender } =
      req.body;
    if (password !== confirmPassword) {
      return res.staus(400).json({ error: "password don't match" });
    }
    const user = await messengerUsers.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "user already exists" });
    }
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const hashedPassword = await bcrypt.hash(
      password,
      await bcrypt.genSalt(10)
    );
    const newUser = new messengerUsers({
      fullName,
      username,
      email,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    if (newUser) {
      await newUser.save();
      await generateTokenAndSetCookie(newUser._id, res);
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        email: newUser.email,
        profilePic: newUser.profilePic,
        gender: newUser.gender,
        createdAt: newUser.createdAt,
      });
    } else {
      res.status(400).json({ error: "something went wrong" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error for signup controller" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await messengerUsers.findOne({ username });
    const isPasswordMatched = await bcrypt.compare(
      password,
      user?.password || " "
    );
    if (!user || !isPasswordMatched) {
      return res.status(400).json({ error: "username or password is wrong" });
    }
    await generateTokenAndSetCookie(user._id, res);
    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error for login controller" });
  }
};
const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error for logout controller" });
  }
};
module.exports = {
  login,
  signup,
  logout,
};
