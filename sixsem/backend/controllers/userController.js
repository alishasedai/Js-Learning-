const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const registerUser = async(req,res) => {
    const {name, email,password} =req.body;
    const hashedPass = await bcrypt.hash(password, 10);

    const user = await User.create({
        name : name,
        email : email,
        password : hashedPass
    })
    res.status(201).json({
        success : true,
        message : "User registered Successfully..",
        user : user
    })
}
module.exports = registerUser