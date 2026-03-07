const express = require("express");
const userModel = require("./models/user");
const postModel = require("./models/post");
const post = require("./models/post");

const app = express()
app.get("/",function(req,res){
    res.send("Hello i am running")
})
app.get("/create",async function(req,res){
    let createdUser = await userModel.create({
        username:"Alisha Sedai",
        email:"alisha@gmail.com",
        age:21
    })
    console.log(createdUser)
    res.send(createdUser);
})

app.get("/create/post",async function(req,res){
    let post = await postModel.create({
      postdata: "Hello Alisha keise ho tum",
      user: "69ab000e6a8797ca8283b551",
    });
    let user = await userModel.findOne({ _id: "69ab000e6a8797ca8283b551" });
    user.posts.push(post._id);
    await user.save();
    res.send({post,user})
})
app.listen(3000);