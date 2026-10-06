const mongoose = require("mongoose");

const noteSchema =new mongoose.Schema({
    title : String,
    description : String
})
const notes = mongoose.model("note",noteSchema);
module.exports = notes;