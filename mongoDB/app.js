const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const userModel = require("./usermodel");

app.get("/", function(req,res){
    res.send("heheheh");
});
app.get("/create", async function (req, res) {
   let createdUser = await userModel.create({
        name :"Anu Dahal",
        username : "anuD",
        email : "anu@gmail.com"
    })
    res.send(createdUser)
});
app.get("/update",async function(req,res){
    let updateUser = await userModel.findOneAndUpdate({username:"alishas"},{name:"Alishma Thapa"},{new:true});
    res.send(updateUser)
})
app.get("/read", async function (req, res) {
  let readUser = await userModel.find();
  res.send(readUser);
});

app.listen(3000);