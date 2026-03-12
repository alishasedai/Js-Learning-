const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {generateToken} =require("../utils/generateTokens");

module.exports.registerUser = async (req,res) =>{
    try{
        let {email,password,fullname} =req.body;

        let findUser = await userModel.findOne({email});
        if(findUser) {return res.status(401).send("You already have an account please login")}

        bcrypt.genSalt(10,function(err,salt){
            bcrypt.hash(password,salt,async function(err,hash){
                let createdUser = await userModel.create({
                    email,password:hash,fullname
                })
               let token =  generateToken(createdUser);
                res.cookie("token",token)
                res.send(createdUser)
            })
        })
    }
    catch(err){
        res.send(err.message)
    }
}
module.exports.loginUser =async (req,res) =>{
    let {email,password} = req,body;

    try{
     let findUser=    await userModel.findOne({email:email});
     if(!user){
        return res.send("Email or password incorrects");
        
     }
        bcrypt.compare(password,findUser.password,function(err,result){
            if(result){
                return res.send("password is correct");
            }
            else{
                res.send("passwor is not correct")
            }
        })
    }
    catch(err){
        res.send(err.message)
    }
}