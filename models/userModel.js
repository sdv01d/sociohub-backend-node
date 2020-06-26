const userSchema = require("./../schemas/userSchema");
const conn = require("./../dbconnection");

const User = conn.model("User", userSchema);

module.exports = User;
