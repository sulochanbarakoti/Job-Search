const express = require("express");
const router = express.Router();

const { createUser, userLogin } = require("../controllers/user");

router.route("/signup").post(createUser);
router.route("/login").post(userLogin);

module.exports = router;
