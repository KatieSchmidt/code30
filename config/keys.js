module.exports = {
  mongoURI: process.env.MONGODB_URI || "mongodb://localhost:27017/codeblog",
  secretOrKey: process.env.SECRET || "secret",
  port: process.env.PORT || 8000
};
