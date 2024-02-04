const express = require("express");
const router = express.Router();

const { createUser, userLogin } = require("../controllers/user");
const {
  createCategory,
  getAllCategories,
  deleteCategory,
  addCity,
  getAllCities,
  deleteCity,
} = require("../controllers/cityAndCategory");

router.route("/signup").post(createUser);
router.route("/login").post(userLogin);

router.route("/add/category").post(createCategory).get(getAllCategories);
router.route("/delete/category/:id").delete(deleteCategory);
router.route("/add/city").post(addCity).get(getAllCities);
router.route("/delete/city/:id").delete(deleteCity);

module.exports = router;
