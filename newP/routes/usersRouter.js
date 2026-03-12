const express= require("express");
const router = express.Router();
const userModel = require("../models/user-model")
router.get("/",function(req,res){
  res.send("hey its working form userRouter")  
});

router.post("/register",async function(req,res){
  let { email,password } =req.body
 try{
  let createdUser = await userModel.create({
    fullname,email,password
  })
   res.send(createdUser);
 }

 catch(err){
  res.send(err.message)
 }
  
})
module.exports = router