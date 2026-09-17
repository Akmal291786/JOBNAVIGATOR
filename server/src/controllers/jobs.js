exports.listJobs = async (req,res) => res.json({jobs:[]});
exports.createJob = async (req,res) => res.status(501).json({message:"Job creation controller ready."});
