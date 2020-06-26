const mongoose = require("mongoose");

const conn = mongoose.createConnection("mongodb://localhost:27017/sociohub", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = conn;
