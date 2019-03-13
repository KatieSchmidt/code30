const express = require("express");
const router = express.Router();
// const Meal = require("../../models/Meal");

//@route  GET api/home
//@dsc    get all home
//@access Public
router.get("/", (req, res) => {
  res.send("okay there!");
});

module.exports = router;
