const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mini");
const userSChema = mongoose.Schema({
    name:String,
    username:String,
    email:String,
    password:String,
    age:Number,
    post:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    }],
    profile :{
        type:String,
        default:"download.jpeg"
    }
})
module.exports = mongoose.model("user",userSChema);
