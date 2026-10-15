const mongoose = require("mongoose");
const NoteSchema = new mongoose.Schema({
    task : {
        required: true,
        type : String
    },
    priority : {
        required: true,
        type : String
    }
})
const Notes = mongoose.model("Note",NoteSchema);
module.exports = Notes

