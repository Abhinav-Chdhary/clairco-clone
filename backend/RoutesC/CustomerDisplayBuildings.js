const express = require("express");
const router = express.Router();
const Building = require("../Models/Building");

router.post("/getCustomBuildings", async (req, res) => {
  try {
    const { companyname } = req.body;
    const reqBuildings = await Building.find({ company: companyname });
    if (!reqBuildings) res.send("No buildings added yet, contact admin");
    else res.send(reqBuildings);
  } catch (error) {
    console.error(error.message);
    res.send("Server Error");
  }
});

module.exports = router;
