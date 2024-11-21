const messengerUsers = require("../models/userModel");

const getUsersForSideBar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await messengerUsers
      .find({
        _id: { $ne: loggedInUserId },
      })
      .select("-password");
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUsersForSideBar };
