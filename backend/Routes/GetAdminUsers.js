const express = require("express");
const router = express.Router();

router.get("/adminUsers", (req, res) => {
  try {
    res.send(global.admin_users);
  } catch (error) {
    console.error(error.messsage);
  }
});

module.exports = router;
