const bcrypt = require("bcryptjs");
const user = require("../models/userModel");
const jwt = require("jsonwebtoken");
const Product = require("../models/productModels");
const registered =async (req,res) => {
    const{name,email,password} = req.body;
    const existingUser =await user.findOne({email});
    if(existingUser){
        return res.status(401).json({
            success : false,
            message : "User already exists"
        })
    }
    const hashed =await bcrypt.hash(password,10);

    const p =await user.create({
        name : name,
        email : email,
        password : hashed
    })

    res.status(201).json({
        success : true,
        message : "User registered successfully",
        data : p
    })
}
const login =async (req,res) => {
    const {email,password} = req.body;
    const usersD = await user.findOne({email});
    if(!usersD){
        return res.status(401).json({
            success : false,
            message : "Invalid email or password"
        })

    }

    const ismatch = await bcrypt.compare(password,usersD.password);
    if(!ismatch){
        return res.status(401).json({
            success : false,
            message : "Invalid email or password."
        })
    }
    const token = jwt.sign({
        _id : usersD._id,
        email : usersD.email
    },
    process.env.JWT_SECRET ,
    {expiresIn : "1d"}
    )

    res.json({
        success : true,
        message : "Login Successfull",
        token : token,
        data : usersD
    })
}
const tests = (req,res) => {
    
    res.json({
        success : true,
        message : "Token gets successfully",
        token : req.headers.authorization,
        users : req.user //here we are using the req.user because in the midlleware 
        //we had done like req.user = validToken
    })
}
const testWho = async(req,res)=> {
    const id = req.params.id;
    console.log("Logged in user : ",req.user.id);
    console.log("Requested product : ",req.params.id);
    
    
    const pro = await Product.findOne({
        _id : id ,
        userId : req.user.id
    })
    console.log("Product : ",pro?.userId);
    
    if(!pro){
      return res.status(401).json({
        success: false,
        message: "You are not allowed to delete this product..",
      });
    }
        const deletes = await Product.findOneAndDelete({ id });
        res.status(401).json({
            success : true,
            message : "Product deleted sucessfully"
        })
    
  
}
module.exports = {registered,login,tests,testWho}

