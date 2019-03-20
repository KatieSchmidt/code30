const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User Model
const User = require("../../models/User");

//@route  GET api/admin/register
//@dsc    Register Admin
//@access Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  if (req.body.email === "katie_schmidt7@icloud.com") {
    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        errors.email = "email already exists";
        return res.status(400).json(errors);
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) {
              throw err;
            } else {
              newUser.password = hash;
              newUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            }
          });
        });
      }
    });
  }
});

//@route  GET api/admin/login
//@dsc    Login Admin/ return JWT token
//@access Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  //check if the email is the admin email
  if (email === "katie_schmidt7@icloud.com") {
    //find user by email
    User.findOne({ email }).then(user => {
      //check for user
      if (!user) {
        errors.email = "User not found";
        return res.status(404).json(errors);
      }
      //check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          //user matched
          const payload = { id: user.id, name: user.name };
          //sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 3600 },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          errors.password = "Password incorrect";
          return res.status(400).json(errors);
        }
      });
    });
  } else {
    errors.admin = "You aren't an Admin!";
    return res.status(400).json(errors);
  }
});

//@route  GET api/users/current
//@dsc    return current users token
//@access Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

module.exports = router;
