const express = require("express");
const router = express.Router();

router.get("/deleteBuilding", (req, res) => {
  console.log("Yes Reached");
});

module.exports = router;
