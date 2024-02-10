const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  job_title: { type: String },
  company: { type: String },
  open_date: { type: String, required: true },
  close_date: { type: String, required: true },
  description: { type: String },
  qualification: { type: String },
  application_instruction: { type: String },
  job_type: { type: String },
  location: { type: String },
  category: { type: String },
  job_level: { type: String },
  image: { type: String },
});

module.exports = mongoose.model("Jobs", jobSchema);
