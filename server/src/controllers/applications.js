exports.apply = async (req,res) => res.status(501).json({message:"Application controller ready."});
exports.listApplications = async (req,res) => res.json({applications:[]});
