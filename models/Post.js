const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  month: {
    type: String,
    required: true
  },
  // timeStart: {

  // }
  // timeEnd : {

  // }
  post: {
    type: String,
    required: true
  }
});

module.exports = Post = mongoose.model("posts", PostSchema);
