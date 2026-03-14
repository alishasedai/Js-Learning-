const userModel = require("../models/user-model");
const prouctModel = require("../models/product-model")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {generateToken} =require("../utils/generateTokens");
const productModel = require("../models/product-model");

module.exports.registerUser = async (req,res) =>{
    try{
        let {email,password,fullname} =req.body;
        console.log(req.body)
        let findUser = await userModel.findOne({email});
        if(findUser) {return res.status(401).send("You already have an account please login")}

        bcrypt.genSalt(10,function(err,salt){
            bcrypt.hash(password,salt,async function(err,hash){
                let createdUser = await userModel.create({
                    email,password:hash,fullname
                })
               let token =  generateToken(createdUser);
                res.cookie("token",token)
                res.redirect("/")
            })
        })
        }
    catch(err){
        res.send(err.message)
    }
}
module.exports.loginUser =async (req,res) =>{
    
    try{
        let { email, password } = req.body;
        console.log(req.body)
     let findUser = await userModel.findOne({email:email});
     if(!findUser){
        return res.send("Email or password incorrects");

     }
        bcrypt.compare(password,findUser.password,async function(err,result){
        //    if(result){
        //     let token = generateToken(findUser);
        //     console.log("TOKEN:", token);
        //     res.cookie("token",token);
            
        //     let products = await productModel.find()
        //     res.render("shop",{products})
        if(result){
    let token = generateToken(findUser);
    res.cookie("token", token);
    res.redirect("/shop"); // ← this changes the browser URL
}
            // res.render("/shop")
            //  res.redirect("/shop"); 
           })
        
    }
    catch(err){
        res.send(err.message)
    }
}

module.exports.logoutUser = async(req,res) =>{
    res.cookie("token","");
    res.redirect("/")
}