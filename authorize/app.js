const cookieParser = require("cookie-parser");
const express = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("./models/users")
const app = express();
const path = require("path");
const bcrypt = require("bcrypt")

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(cookieParser())


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",function(req,res){
   res.render("index")
})
app.post("/create",function(req,res){
    let {username,email,password,age} = req.body
    bcrypt.genSalt(10,(err,salt) => {
        bcrypt.hash(password,salt, async function(err,hash){
            let create = await userModel.create({
              username,
              email,
              password :hash,
              age,
            });
            let token = jwt.sign({email},"shh");
            res.cookie("token",token)

            res.render("login")
        })
    })

})
//login

app.get("/login",function(req,res){
    res.render("login")
})
app.post("/login",async function(req,res){
   
    let user =await userModel.findOne({email:req.body.email});
    if(!user) return res.send("Something is wrong");
    console.log(user.password, req.body.password)
    bcrypt.compare(req.body.password,user.password, function(err,result){
        if(result) {
            let token = jwt.sign({email:user.email},"shh")
            res.cookie("token",token)
            res.send("yes you can login");
        }
        else res.send("Something is wrong")
    })
    
})
app.get("/logout",function(req,res){
    res.cookie("token","");
    res.send("No cookies okay")
})
app.listen(3000);