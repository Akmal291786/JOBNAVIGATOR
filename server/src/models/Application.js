const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
  candidateId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  resumeUrl: String,
  coverLetter: String,
  status: { type: String, enum: ["Applied", "Shortlisted", "Interview", "Rejected", "Hired"], default: "Applied" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Application", applicationSchema);
