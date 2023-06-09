const express = require("express");
const router = express.Router();

// GET home page
router.get("/", (req, res) => {
  res.send("Wiki home page");
});

// GET about page
router.get("/about", (req, res) => {
  res.send("About this wiki");
});

module.exports = router;
