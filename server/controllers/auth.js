const verifyToken = require("../service/auth");

const Auth = (req, res) => {
  const token = req.cookies.token; //get the token from cookies

  if (!verifyToken(token)) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  return res.status(200).json({ message: "authorized" });
};

module.exports = { Auth };
