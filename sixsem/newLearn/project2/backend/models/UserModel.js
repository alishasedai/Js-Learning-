const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name : String,
    email : String,
    address : String
})
const Users = mongoose.model("users",UserSchema);

module.exports = Users
