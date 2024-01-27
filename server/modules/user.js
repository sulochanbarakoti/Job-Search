const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: { type: String },
  username: { type: String, required: true, unique: true },
  email: { type: String, unique: true },
  phone: { type: Number },
  password: String,
  admin: { type: Boolean, default: false }, // admin or user
  image: { data: Buffer, contentType: String },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
