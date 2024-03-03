const Job = require("../modules/jobs");
const verifyToken = require("../service/auth");

//new member registration
const newJob = async (req, res) => {
  try {
    const image = req.file ? req.file.path : undefined;
    const {
      job_title,
      company,
      open_date,
      close_date,
      description,
      qualification,
      application_instruction,
      job_type,
      location,
      category,
      job_level,
    } = req.body;

    const data = new Job({
      job_title,
      company,
      open_date,
      close_date,
      description,
      qualification,
      application_instruction,
      job_type,
      location,
      category,
      job_level,
      image,
    });
    const token = req.cookies.token;
    const res = await Job.create(data);
    res.status(200).json({
      msg: "Job added successfully",
      user: res,
    });
  } catch (error) {
    res.status(401).send({ protected: true, msg: "error" });
  }
};

const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (err) {
    res.status(401).send({ protected: true, msg: "error" });
  }
};

const deleteJob = async (req, res) => {
  try {
    const res = await Job.findByIdAndDelete(req.params.id);
    if (!res) return res.status(404).send("No job with this id found.");
    res.status(200).send({ msg: "The job has been deleted." });
  } catch (error) {
    res.send(error);
  }
};

module.exports = { newJob, getAllJobs, deleteJob };
