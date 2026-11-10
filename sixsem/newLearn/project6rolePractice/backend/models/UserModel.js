const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type : String,
     enum : ["female","male","others"],
    required: true,
  },
  role :{
    type : String,
    default : "student"
  }
});

const UserModel = mongoose.model("users",UserSchema);

module.exports = UserModel;
