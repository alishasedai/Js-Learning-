const express = require("express");
const userModel = require("./models/user");
const cookieParser = require("cookie-parser")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.set("view engine","ejs")
app.get("/",function(req,res) {
    res.render("index")
})
//create the account
app.post("/register",async function(req,res){
    let {email,password,name,username,age} = req.body;

    let users =await userModel.findOne({email});
    if(users) return res.status(500).send("User already registered");

    bcrypt.genSalt(10, function(err,salt){
        bcrypt.hash(password,salt,async function(err,hash){
            let createdUser =await userModel.create({
                name,
                email,
                password:hash,
                username,
                age

            });
            let token = jwt.sign({email:email,userid:createdUser._id},"shh");
            res.cookie("token",token)
            res.send(createdUser)
        })
    })
    
})
app.listen(3000)

