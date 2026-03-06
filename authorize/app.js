const cookieParser = require("cookie-parser");
const express = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("./models/users")
const app = express();
const path = require("path");

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
    let create = userModel.create();

})
app.listen(3000);