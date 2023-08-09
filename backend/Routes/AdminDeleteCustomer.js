const express = require("express");
const router = express.Router();
const Customer = require("../Models/Customer");

router.delete("/deleteCustomer", async (req, res) => {
  try {
    const { id, company } = req.body;
    //console.log(id);
    const deleteCompany = await Customer.findByIdAndDelete(id);
    if (!deleteCompany) {
      return res
        .status(404)
        .json({ success: false, message: "Company not found" });
    }
    res.send({ success: "true" });
  } catch (error) {
    res.send({ success: false });
  }
});

module.exports = router;
