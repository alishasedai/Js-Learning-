const express= require("express");
const router = express.Router();
const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const {generateToken} =require("../utils/generateTokens");
const { registerUser } = require("../controllers/authControllers");
router.get("/",function(req,res){
  res.send("hey its working form userRouter")  
});

router.post("/register",registerUser);
router.post("/login",function(req,res){
  res.send("Login router i am hehhe")
})
  
module.exports = router