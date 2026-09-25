// const mongoose = require("mongoose");
// const userSChema = new  mongoose.Schema({
//     name : {
//         type : String,
//         require :true
//     },
//     email : {
//         type : String,
//         require : true
//     },
//     password : {
//         type : String,
//         require : true
//     }
// }) 
// const user = mongoose.model("User",userSChema);


// module.exports = user;

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
})

const User = mongoose.model("user",UserSchema);

module.exports = User;