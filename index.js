const User = require("./models/userModel");

async function createDocu() {
  const user = new User({
    NAME: "Stringer",
    EMAIL: "String@ss.cm",
    GENDER: "Male",
    DEVICE_ID: "Stringerer",
    DOB: Date.now(),
    PASSWORD: "Stringu",
    _id: "String",
  });

  const result = await user.save();
  console.log(result);
}

createDocu();
