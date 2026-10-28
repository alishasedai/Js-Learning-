require("dotenv").config();
const Db = require("./db/db");
const cors = require("cors")
const Notes = require("./models/Post.model");


const express = require("express");
const app = express();

app.use(
  cors({
    origin: "https://js-learning-rouge.vercel.app",
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.json());

Db();
//fetch alll notes
app.get("/",async(req,res) => {
   try{
        const result = await Notes.find();
        res.json({
            message : "All Notes are shown",
            data  : result
        })

   }
   catch(err){
    res.json({
        message : err.message
    })
   } 
   
})

app.post("/create-note",async(req,res) => {
    try{
        const {task,priority} = req.body;
        console.log("body data :",req.body);
    const create =await Notes.create({
        task,priority
    })
    res.json({
        success : true,
        message : "Notes created successfully",
        data : create
    })
    }
    catch(err){
        res.status(500).json({
            success : false,
            message : " Failed to create Notes.",
            error : err.message
        })
    }
})

app.patch('/update-note/:id',async(req,res) => {
    const updateNote = await Notes.updateOne({
        _id : req.params.id
    },
{$set : req.body})
    res.json({
        message : "Notes updated successfully"
    })
})

app.delete('/delete-note/:id',async(req,res) => {
    try{
        const {id} = req.params;
        const deleteNote = await Notes.findByIdAndDelete(id)
        res.json({
        message : "Notes deleted successfully",
        success : true,
        data : deleteNote
    })
    
    }
    catch(err){
        res.json({
            success : false,
            message : "Error deleting the notes",
            error : err.message
        })
    }
})

// app.listen(3000, () => {
//     console.log("Server is starting at port 3000");
    
// })
module.exports = app