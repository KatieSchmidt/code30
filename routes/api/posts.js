const express = require("express");
const router = express.Router();
const Post = require("../../models/Post");

//@route  GET api/posts
//@dsc    get all posts
//@access Public
router.get("/", (req, res) => {
  res.send("this will have all the posts later");
});

module.exports = router;
