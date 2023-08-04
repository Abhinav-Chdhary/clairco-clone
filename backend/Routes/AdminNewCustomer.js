const express = require("express");
const router = express.Router();

router.post("/adminNewCustomer", async (req, res) => {
  res.json({ success: "true" });
  console.log("reached");
});

module.exports = router;
