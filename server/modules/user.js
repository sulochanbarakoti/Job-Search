const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  fullname: { type: String },
  username: { type: String, required: true, unique: true },
  email: { type: String, unique: true },
  phone: { type: String },
  password: { type: String, required: true },
  admin: { type: Boolean, default: false }, // admin or user
  // image: { data: Buffer, contentType: String },
  image: { type: String },
});

//hash the password before saving
userSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    console.error(error);
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
