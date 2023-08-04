const express = require("express");
const router = express.Router();

router.post("/adminNewBuilding", async (req, res) => {
  res.send("Works");
});

module.exports = router;
