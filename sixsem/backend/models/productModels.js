const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        min : 1
    }
    ,userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    }
})

const Product = mongoose.model("Product",productSchema);
module.exports = Product