const { City, Category } = require("../modules/cityAndCategory");

const createCategory = async (req, res) => {
  const { category } = req.body;
  const match = await Category.findOne({ category });
  if (match) {
    return res.status(409).json({ msg: "This category already exists" });
  }
  try {
    const savedCategory = await Category.create(req.body);
    res.status(200).json({ msg: "Category Added!" });
  } catch (error) {
    res.send(500).json({ msg: "Internal Server Error" });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    if (!categories)
      return res.status(404).json({ msg: "No Categories Found" });
    res.status(200).json(categories);
  } catch (error) {
    res.send(500).json({ msg: "Server error" });
  }
};

const deleteCategory = async (req, res) => {
  const { id: categoryID } = req.params;
  let info = await Category.findByIdAndDelete({ _id: categoryID });
  if (!info) {
    return res
      .status(404)
      .json({ msg: `Category with the ID ${id.categoryId} not found` });
  }
  res.status(200).json({ msg: "Deleted Successfully" });
};

const addCity = async (req, res) => {
  const { city } = req.body;
  const match = await City.findOne({ city });
  if (match) {
    return res.status(409).json({ msg: "This city already exists" });
  }
  try {
    const addCity = await City.create(req.body);
    res.status(200).json(addCity);
  } catch (error) {
    res.send(500).json({ msg: "Internal Server Error" });
  }
};

const getAllCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.status(200).json(cities);
  } catch (error) {
    res.send(500).json({ msg: "Internal Server Error" });
  }
};

const deleteCity = async (req, res) => {
  console.log(req.params);
  const { id: cityID } = req.params;
  let info = await City.findByIdAndDelete({ _id: cityID });
  if (!info) {
    return res
      .status(404)
      .json({ msg: `City with the ID ${cityID} is not found.` });
  }
  res.status(200).json({ msg: "Deleted successfully." });
};

module.exports = {
  createCategory,
  getAllCategories,
  deleteCategory,
  addCity,
  getAllCities,
  deleteCity,
};
