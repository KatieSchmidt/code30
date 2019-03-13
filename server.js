const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//routes
const home = require("./routes/api/home");
const post = require("./routes/api/posts");

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
app.use("/api/home", home);
app.use("/api/post", post);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
