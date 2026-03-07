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


app.get("/",function(req,res){
    res.render("index");
})
app.post("/register",async function(req,res){
     let {email,username,name,password,age} =req.body;
     let user =await userModel.findOne({email});
     if(user) return res.status(500).send("User already registered");
    
     bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash(password,salt, async function(err,hash){
            let createdUser =await userModel.create({
                name,email,password:hash,username,age
            });
            res.send(createdUser)
        })
      let token = jwt.sign({email:user.email,userid:user._id},"shh");
        res.cookie("token",token);
        res.send("Registered")

     })
});


app.listen(3000)