const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
    fullname :{
        type:String,
        trim:true,
        minLength:3
    },
    email:String,
    password:String,
   
    products:{
        types:Array,
        default:[]
    },
    picture:String,
    gstin:String 
})
module.exports = mongoose.model("owner",ownerSchema);