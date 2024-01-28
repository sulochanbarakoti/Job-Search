const User = require("../modules/user");

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

module.exports = createUser;
