const express = require("express");
const router = express.Router();

router.get("/adminNewBuilding", async (req, res) => {
  res.send("Works");
});

module.exports = router;
