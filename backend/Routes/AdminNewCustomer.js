const express = require("express");
const router = express.Router();
const User = require("../Models/Customer");
const { body, validationResult } = require("express-validator");

const bcrypt = require("bcrypt");
//for creating new Customer
router.post(
  "/adminNewCustomer",
  [
    body("company").isLength({ min: 5 }),
    body("email").isEmail(),
    body("password", "incorrect password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //validate
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //password encryption using bcrypt
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);
    try {
      await User.create({
        company: req.body.company,
        password: secPassword,
        email: req.body.email,
      });
      res.json({ success: true });
    } catch (err) {
      console.log(err);
      res.json({ success: false });
    }
  }
);

module.exports = router;
