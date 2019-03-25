const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const port = require("./config/keys").port;

require("dotenv").config();

//routes
const admin = require("./routes/api/admin");
const posts = require("./routes/api/posts");

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB CONFIG
const db = require("./config/keys").mongoURI;

//connect to mongodb
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected!");
  })
  .catch(err => console.log(err));

//use routes
app.use("/api/admin", admin);
app.use("/api/posts", posts);

//Passport middleware
app.use(passport.initialize());

//passport config
require("./config/passport")(passport);

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
