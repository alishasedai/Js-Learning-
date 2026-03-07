const express = require("express");
const userModel = require("./models/user");
const postModel = require("./models/post")
const cookieParser = require("cookie-parser")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

app.get("/",function(req,res){
    res.render("index");
});
app.get("/login",function(req,res){
    res.render("Login")
})

app.post("/register", async function(req,res){
    let {name,username,email,age,password} = req.body;
    console.log(req.body)
  let user = await userModel.findOne({email});
  if(user) return res.status(500).send("User already Registered!");

    bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash(password,salt,async function(err,hash){
            console.log(hash)
           let createUser = await userModel.create({
            name,
            username,
            email,
            password:hash,
            age
           });
          let token = jwt.sign({email,userid: createUser._id},"se");
          res.cookie("token",token)
            res.redirect("/profile")
        })    
    })
})
app.get("/profile",isLoggedIn,async function(req,res){
    let user =await userModel.findOne({email : req.user.email});
    console.log(user)
    res.render("profile",{user})
})
app.post("/login",isLoggedIn,async function(req,res){
    let {email,password} = req.body;
    let data =await userModel.findOne({email});
      if (!data) {
        return res.send("data not found");
      }
    bcrypt.compare(password,data.password,function(err,result){
       if(result){
        let token = jwt.sign({email:email,userid:data._id},"se");
        res.cookie("token",token)
        res.redirect("/profile");
        
       }else{
        res.send("Something is wrong");
       } 
    })
})
app.get("/logout",function(req,res){
    res.cookie("token","");
    res.redirect("/login")})

    function isLoggedIn(req,res,next){
        if(req.cookies.token === "") return res.redirect("/login");
        else{
          let data =  jwt.verify(req.cookies.token,"se")
          req.user = data;
          next()
        }
    }
app.listen(3000)