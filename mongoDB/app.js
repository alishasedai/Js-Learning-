const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("heheheh")
})
app.listen(3000);