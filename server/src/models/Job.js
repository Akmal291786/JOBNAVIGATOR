const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: String,
  type: { type: String, enum: ["Full-time", "Part-time", "Internship", "Contract"], default: "Full-time" },
  description: String,
  skills: [String],
  salary: String,
  recruiterId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Job", jobSchema);
