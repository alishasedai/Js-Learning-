const user = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt  = require("jsonwebtoken");


const registerUser = async(req,res) => {
    
  
    const {name, email,password} =req.body;
    const existingUser = await user.findOne({ email });
    if(existingUser){
        return res.status(400).json({
            success : false ,
            message : "Email already exists.."
        })
    }
    const hashedPass = await bcrypt.hash(password, 10);

    const u = await user.create({
        name : name,
        email : email,
        password : hashedPass
    })

    
    res.status(201).json({
        success : true,
        message : "User registered Successfully..",
        user : {
           name : u.name,
           email : u.email
        }
    })
}
const loginUser = async(req,res) => {
    const {email,password} = req.body;
    const users  = await user.findOne({email});
    if(!users){
        return res.status(400).json({
            success : false,
            message : "Invalid email or password"
        })
    }
    const isMatch = await bcrypt.compare(password,users.password);

    if(!isMatch){
        return res.status(400).json({
            success : false,
            message : "Invalid email or password"
        })
    }
    const token = jwt.sign({
        id : users._id,
        email : users.email
    },
        process.env.JWT_SECRET,
        {expiresIn : "1d"}
)
    res.json({
        success : true,
        message : "Login Successfull",
        token : token,
        user : {
            id : users._id,
            name : users.name,
            email : users.email
        }
    })
}

const myProfile = async(req,res) => {
    const u = await user.findById(req.params.id);

    res.json({
        success : true,
        data : {
            name : u.name,
            email : u.email
        }
    })
}
module.exports = {registerUser,loginUser,myProfile}

