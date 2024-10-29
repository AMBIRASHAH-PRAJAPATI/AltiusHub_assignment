const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: string,
    require: true,
    unique: true,
  },
  password: {
    type: string,
    require: true,
  },
  ProfilePic: {
    type: string,
  },
});

module.exports = mongoose.mondel("User", userSchema);
