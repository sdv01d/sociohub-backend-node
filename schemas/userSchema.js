const Schema = require("mongoose").Schema;

const userSchema = new Schema({
  NAME: String,
  EMAIL: String,
  GENDER: String,
  DEVICE_ID: String,
  DOB: Date,
  PASSWORD: String,
  _id: String,
});

module.exports = userSchema;
