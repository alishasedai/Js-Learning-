require("dotenv").config();
const express = require("express");
const ConnectDB = require("./db/db")
const PostModel = require("./models/Post.model")
const multer = require("multer");
const uploadFile = require("./services/storage.service.js")
const cors = require("cors");

const app = express();
app.use(express.json())
app.use(cors());
const upload = multer({storage : multer.memoryStorage()})
ConnectDB();

app.post("/create-post",upload.single("image"),async(req,res) => {
    console.log(req.file.buffer); 
    const upload = await uploadFile(req.file.buffer);
    console.log(upload);
    const post = await PostModel.create({
      image: upload.url,
      caption: req.body.caption,
    });
    
    res.json({
        message : "Post created successfully......",
        post : post
    })
})


app.get("/getAllPost",async(req,res) => {
    const d = await PostModel.find();    
    res.json({
        message : "Data fetch successfully hahhah abccc",
        postss : d
    })
})
app.patch("/updatePost/:id",async(req,res) => {
    try{
        const id = req.params.id;
        const update = await PostModel.findByIdAndUpdate(
          id,
          { caption: req.body.caption },
          { returnDocument: "after" }
        );
        console.log("updates post : ",update)
        res.json({
          message: "Post is updated",
        });
    }catch(err){
        console.log("UPDATE ERROR : ",err.message);
        
        res.status(500).json(
            {
                message : err.message
            }
        )      
    }   
})
app.listen(3000,(req,res) => {
    console.log("Server is running at port 3000");
    
})