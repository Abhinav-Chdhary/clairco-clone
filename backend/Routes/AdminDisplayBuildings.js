const express = require("express");
const router = express.Router();

router.post("/getBuildings", (req, res) => {
  try {
    res.send(global.buildings);
  } catch (error) {
    console.error(error.message);
    res.send("Server Error");
  }
});

module.exports = router;
