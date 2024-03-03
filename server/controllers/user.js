const User = require("../modules/user");
const getToken = require("../service/auth");
const bcrypt = require("bcrypt");
const cookiesParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//New user registration
const createUser = async (req, res) => {
  // Assuming the file path is available in req.file.path
  const image = req.file ? req.file.path : undefined;

  //   // Extract data from request body
  const { fullname, username, email, phone, password } = req.body;
  console.log(image);
  // Create a new user instance
  const newUser = new User({
    fullname,
    username,
    email,
    phone,
    password,
    image,
  });
  try {
    const savedUser = await User.create(newUser);
    res.status(201).json({
      msg: "User registered successfully",
      user: savedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

//user login logic
const userLogin = async (req, res) => {
  // console.log(req.body);
  const { username, password } = req.body;
  const user = await User.findOne({ $or: [{ username }, { email: username }] });
  if (!user) return res.status(400).json({ msg: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

  // Return jsonwebtoken
  const getToken = (userID) => {
    return jwt.sign({ userID }, process.env.MY_SECRET, { expiresIn: "1h" });
  };
  const token = getToken(user._id);

  res.cookie("token", token, {
    maxAge: 3600000, // 1 hour expiration time
    httpOnly: true, // Cookie inaccessible to JavaScript
    sameSite: "strict", // Prevent CSRF attacks
    secure: true, // Enable for HTTPS only
  });

  res.status(200).json({
    msg: "Logged in Successfully!",
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      admin: user.admin,
    },
  });
};

module.exports = { createUser, userLogin };
