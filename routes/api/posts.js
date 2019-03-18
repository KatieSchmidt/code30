const express = require("express");
const router = express.Router();
const Post = require("../../models/Post");

const passport = require("passport");

//@route  GET api/posts
//@dsc    get all posts
//@access Public
router.get("/", (req, res) => {
  const errors = {};
  Post.find()
    .then(posts => {
      if (posts.length <= 0) {
        errors.post = "No posts have been created";
        res.status(404).json(errors.post);
      } else {
        return res.json(posts);
      }
    })
    .catch(err => res.status(404).json(err));
});

//@route  GET api/posts/:post_id
//@dsc    get a post
//@access Public
router.get("/:post_id", (req, res) => {
  const errors = {};
  Post.findById(req.params.post_id)
    .then(post => {
      if (!post) {
        errors.post = "this post doesnt exist";
        res.status(404).json(errors.post);
      } else {
        res.json(post);
      }
    })
    .catch(err => res.status(404).json(err));
});

//@route  Post api/posts
//@dsc    create a post
//@access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const postFields = {
      title: req.body.title,
      post: req.body.post
    };
    new Post(postFields)
      .save()
      .then(post => {
        res.json(post);
      })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;
