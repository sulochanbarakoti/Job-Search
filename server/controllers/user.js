const User = require("../modules/user");
const getToken = require("../service/auth");
const bcrypt = require("bcrypt");

//New user registration
const createUser = async (req, res) => {
  try {
    // Extract data from request body
    const { fullname, username, email, phone, password } = req.body;

    // Create a new user instance
    const newUser = new User({
      fullname,
      username,
      email,
      phone,
      password,
      image: { data: req.file.buffer, contentType: req.file.mimetype },
    });
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
  const token = getToken(user._id);

  res.header("x-auth-token", token).json({
    msg: "Logged in Successfully!",
    token,
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      admin: user.admin,
    },
  });
};

module.exports = { createUser, userLogin };
