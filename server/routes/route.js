const express = require("express");
const router = express.Router();
const upload = require("../service/multerConfig");

const { createUser, userLogin } = require("../controllers/user");
const {
  createCategory,
  getAllCategories,
  deleteCategory,
  addCity,
  getAllCities,
  deleteCity,
} = require("../controllers/cityAndCategory");
const { newJob, getAllJobs, deleteJob } = require("../controllers/jobs");

// router.route("/signup").post(createUser);
router.post("/signup", upload.single("image"), createUser);
router.route("/login").post(userLogin);

router.route("/add/category").post(createCategory).get(getAllCategories);
router.route("/delete/category/:id").delete(deleteCategory);
router.route("/add/city").post(addCity).get(getAllCities);
router.route("/delete/city/:id").delete(deleteCity);

router.post("/create/job", upload.single("image"), newJob);
router.route("/get/jobs").get(getAllJobs);
router.route("/delete/job/:id").delete(deleteJob);

module.exports = router;
