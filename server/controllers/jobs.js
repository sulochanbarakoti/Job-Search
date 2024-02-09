const Job = require("../modules/jobs");

//new member registration
const newJob = async (req, res) => {
  try {
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

    const newJob = new Job({
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
      image: { data: req.file.buffer, contentType: req.file.mimetype },
    });
    const saveJob = await Job.create(newJob);
    res.status(201).json({
      msg: "Job added successfully",
      user: saveJob,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllJobs = async (req, res) => {
  try {
    // const jobs = await Job.find(filter).sort("open_date");
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (err) {
    console.log(err);
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