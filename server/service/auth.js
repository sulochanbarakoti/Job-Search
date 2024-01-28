const jwt = require("jsonwebtoken");
require("dotenv").config();

const getToken = (userID) => {
  return jwt.sign({ userID }, process.env.MY_SECRET, { expiresIn: "1h" });
};

module.exports = getToken;
