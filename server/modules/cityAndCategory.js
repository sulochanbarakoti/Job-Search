const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  category: { type: String, required: true },
});

const citySchema = new mongoose.Schema({
  city: { type: String, required: true },
});

const Category = mongoose.model("category", categorySchema);
const City = mongoose.model("city", citySchema);

module.exports = { Category, City };
