const express = require("express");
const router = express.Router();
const Building = require("../Models/Building");

router.put("/adminUpdateBuilding", async (req, res) => {
  try {
    const { id, ...updatedDetails } = req.body;

    const updatedBuilding = await Building.findByIdAndUpdate(
      id,
      updatedDetails
    );

    if (!updatedBuilding) {
      return res
        .status(404)
        .json({ success: false, message: "Building not found" });
    }

    res.json({ success: true, message: "Building updated successfully" });
  } catch (error) {
    console.error("Error updating building:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
