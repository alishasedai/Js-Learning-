require("dotenv").config()
const express = require("express");
const ConnectDb = require("./db/db")
const PostModel = require("./models/Dog.model")
const multer = require("multer");
const app = express();
const uploadFile = require("./services/storage.service")

app.use(express.json());
const upload = multer({storage : multer.memoryStorage()})

ConnectDb();
app.get("/",(req,res) => {
    console.log("Hello i am running");
    res.json("I am ruuning")
})
app.post("/create-post",upload.single("image"),async(req,res) => {
    const data  = req.body;
    console.log(req.body)
    console.log(req.file);
    const result = await uploadFile(req.file.buffer)
    console.log(result);
    
   const post = await PostModel.create({
        image : result.url,
        caption : data.caption
    })
    res.status(201).json({
        message : "Post created successfully",
        post : post

    })
})

app.get("/getAllPost",async(req,res) => {
    const allPost = await PostModel.find();
    res.json({
        message : "Data shown ..",
        allPost : allPost
    })
})

app.listen(3000,() => {
    console.log("Server is running at port : 3000");
    
})