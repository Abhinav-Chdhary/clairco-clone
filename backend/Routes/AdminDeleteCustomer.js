const express = require("express");
const router = express.Router();
const Customer = require("../Models/Customer");
const Building = require("../Models/Building");

router.delete("/deleteCustomer", async (req, res) => {
  try {
    const { id, company } = req.body;
    //delete all buildings associated with the company
    const deleteBuilding = await Building.deleteMany({ company: company });
    //delete the company
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
