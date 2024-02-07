const express = require("express");
const router = express.Router();
const multer = require("multer");

const { createUser, userLogin } = require("../controllers/user");
const {
  createCategory,
  getAllCategories,
  deleteCategory,
  addCity,
  getAllCities,
  deleteCity,
} = require("../controllers/cityAndCategory");
const { newJob, getAllJobs } = require("../controllers/jobs");

// Multer configuration for handling image uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.route("/signup").post(createUser);
router.route("/login").post(userLogin);

router.route("/add/category").post(createCategory).get(getAllCategories);
router.route("/delete/category/:id").delete(deleteCategory);
router.route("/add/city").post(addCity).get(getAllCities);
router.route("/delete/city/:id").delete(deleteCity);

router.route("/create/job").post(newJob);
router.route("/get/jobs").get(getAllJobs);

module.exports = router;
