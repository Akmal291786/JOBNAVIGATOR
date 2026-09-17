const router = require("express").Router();
router.get("/health", (req,res)=>res.json({area:"auth",status:"ready"}));
module.exports = router;
