const router = require("express").Router();
router.get("/", (req,res)=>res.json({applications:[]}));
module.exports = router;
