const express = require("express");
const userModel = require("./models/user");
const postModel = require("./models/post");

const app = express()
app.get("/",function(req,res){
    res.send("Hello i am running")
})
app.get("/post/create",function(req,res){
    res.send("working")
})
app.listen(3000);