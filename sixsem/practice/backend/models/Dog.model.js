const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    image : String,
    caption : String
})
const PostModel = mongoose.model("dogData", PostSchema);
module.exports = PostModel