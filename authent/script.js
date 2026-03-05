const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.cookie("name","AlushaSedai");
    res.send("done");
})

app.listen(3000)