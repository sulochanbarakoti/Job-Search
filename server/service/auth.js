const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (token) => {
  try {
    if (!token) return false;
    jwt.verify(token, process.env.MY_SECRET, (error, decoded) => {
      if (err) {
        // JWT token verification failed
        return false;
      } else {
        // JWT token verification successful
        // Proceed with protected route logic
        return true;
      }
    });
  } catch (e) {
    console.log(e);
    res.status(400).send("Invalid Token");
  }
};

module.exports = verifyToken;
