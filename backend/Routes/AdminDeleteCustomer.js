const express = require("express");
const router = express.Router();
const Building = require("../Models/Customer");

router.delete("/deleteCustomer", async (req, res) => {
  try {
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false });
  }
});

module.exports = router;
