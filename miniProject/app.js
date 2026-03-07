const express = require("express");
const userModel = require("./models/user");
const postModel = require("./models/post")
const cookieParser = require("cookie-parser")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();

app.set("view engine","ejs")
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get("/",function(req,res){
    res.render("index");
})
app.get("/login", function (req, res) {
  res.render("login");
});
app.post("/register",async function(req,res){
     let {email,username,name,password,age} =req.body;
     let user =await userModel.findOne({email});
     if(user) return res.status(500).send("Something went wrongs");
    
     bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash(password,salt, async function(err,hash){
            let createdUser =await userModel.create({
                name,email,password:hash,username,age
            });
             let token = jwt.sign(
               { email: createdUser.email, userid: createdUser._id },
               "shh",
             );
             res.cookie("token", token);
             res.send(createdUser);
        })
     

     })
});

app.post("/login",async function(req,res){
     let {email,username,name,password,age} =req.body;
     let user =await userModel.findOne({email});
     if(!user) return res.status(500).send("User not found");
     bcrypt.compare(password,user.password,function(err,result){
        if(result) res.status(200).send("You can loggin")
            else res.redirect("/login")
     });

})
app.get("/logout",function(req,res){
    res.cookie("token","");
    res.send("You are logged out")
})

app.listen(3000)