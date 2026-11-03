const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");




const studentSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    address : String
})
const studentModel = mongoose.model("student",studentSchema);
module.exports = studentModel;

