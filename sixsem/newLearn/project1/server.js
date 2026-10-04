const express = require("express");
const ConnectDb = require("./db/db")
const PostModel = require("./models/Dog.model")
const multer = require("multer");
const app = express();

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
    
    await PostModel.create({
        image : data.image,
        caption : data.caption
    })
    res.json({
        message : "Post created successfully"
    })
})

app.listen(3000,() => {
    console.log("Server is running at port : 3000");
    
})