const express= require("express");
const router = express.Router();
const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser")
router.get("/",function(req,res){
  res.send("hey its working form userRouter")  
});

router.post("/register", function(req,res){
  
 try{
  let { email, password, fullname } = req.body;
  bcrypt.genSalt(10,function(err,salt){
    bcrypt.hash(password,salt,async function(err,hash){
      if(err) return res.send(err.message);
      else{
         let createdUser = await userModel.create({
           fullname,
           email,
           password: hash,
         });

      const token = jwt.sign({ email, id: createdUser._id }, "hehe");
         res.cookie("token",token)
         res.send("User created Successfully");
      }
     
  })
  })
 
 }

 catch(err){
  res.send(err.message)
 }
  
})
module.exports = router