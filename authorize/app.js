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
            res.send("Done")
        })
    })

})
app.listen(3000);