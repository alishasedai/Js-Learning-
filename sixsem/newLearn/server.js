const express = require("express");

const app = express();
app.use(express.json());
const notes = [];
app.get("/",(req,res) => {
    
    
    res.json({
        message : "I am working..",
        notes : notes
    })
})
app.post("/note",(req,res) => {
    notes.push(req.body);
    res.json({
        message : "created note successfully"
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

