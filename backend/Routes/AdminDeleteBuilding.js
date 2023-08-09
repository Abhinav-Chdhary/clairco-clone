const express = require("express");
const router = express.Router();
const Building = require("../Models/Building");

router.delete("/deleteBuilding", async (req, res) => {
  try {
    const { id } = req.body;
    //console.log(id);
    const deleteBuilding = await Building.findByIdAndDelete(id);
    if (!deleteBuilding) {
      return res
        .status(404)
        .json({ success: false, message: "Building not found" });
    }
    res.send({ success: "true" });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
