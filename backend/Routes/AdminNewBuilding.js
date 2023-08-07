const express = require("express");
const router = express.Router();
const Building = require("../Models/Building");
const { body, validationResult } = require("express-validator");

//for creating new Building
router.post(
  "/adminNewBuilding",
  [
    body("company").isLength({ min: 5 }),
    body("building").isLength({ min: 5 }),
    body("geolocation").isLength({ min: 5 }),
    body("address").isLength({ min: 10 }),
    body("area").isLength({ min: 5 }),
  ],
  async (req, res) => {
    console.log("this works");
    //validate
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      await Building.create({
        company: req.body.company,
        building: req.body.building,
        geolocation: req.body.geolocation,
        address: req.body.address,
        area: req.body.area,
        has_device: req.body.has_device,
        pm_2_5: req.body.pm_2_5,
        pm_10: req.body.pm_10,
        co2: req.body.co2,
        tvoc: req.body.tvoc,
        temperature: req.body.temperature,
        humidity: req.body.humidity,
      });
      res.json({ success: true });
    } catch (err) {
      console.log(err);
      res.json({ success: false });
    }
  }
);

module.exports = router;
