const express = require("express");
const notes = require("./models/notes.model");
const connectDb = require("./db/db")

const app = express();
app.use(express.json());
connectDb();

app.get("/",async(req,res) => {
    
    const n = await notes.findOne({
        title : "Title_1"
    });
    res.json({
        message : "here are your notes",
        notes : n
    })
})
app.post("/note",async(req,res) => {
    const data = req.body;
    await notes.create({
        title : data.title,
        description : data.description
    })
    res.json({
        message : "created note successfully at here"
    })
})
app.patch("/update/:index",(req,res) => {
    const index = req.params.index;
    const description = req.body.description;
    notes[index].description = description;
    res.json({
        message : "Note updated successfully.."
    })
})
app.delete("/delete/:index",(req,res) => {
    const index = req.params.index
    delete notes[index]
    res.json({
        message : "note deleted succesfully.."
    })
})

app.listen(3000,() => {
    console.log("Server is listening at port 3000");
    
})

