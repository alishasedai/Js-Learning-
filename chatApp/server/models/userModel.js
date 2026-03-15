const { profile, timeStamp } = require("console");
const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    name:{
        type: String,
        required : [true,"Provide name"]
    },
    email : {
        type : String,
        required : [true, "Provide email"],
        unique : true
    },
    password : {
        type : String,
        required : [true,"provide password"]
    },
    profile_pic : {
        type : String,
        default : ""
    },

},{
    timestamps : true
})


const userModel = mongoose.model("User",userSchema);
module.exports = userModel