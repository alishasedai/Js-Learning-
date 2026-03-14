const express = require("express");
const cors = require("cors")
const app = express();

app.use(cors({
    origin: process.env.FRONTED_URL,
    credentials :true
}))
app.get("/",function(req,res){

})

const port = process.env.PORT || 8080