require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "Job Navigator API" });
});

app.get("/api/jobs", (req, res) => {
  res.json({ jobs: [], message: "Connect MongoDB and add jobs to populate listings." });
});

app.get("/api/applications", (req, res) => {
  res.json({ applications: [] });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Job Navigator API running on ${PORT}`));
