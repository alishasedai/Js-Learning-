const express = require("express");
const cors = require("cors")
const app = express();
require("dotenv").config();
const connectDB = require("./server/config/connectDb")

app.use(cors());

app.get("/",function(req,res){
    res.json({
        message:"i a running"})
})

const PORT = process.env.PORT || 8080;


connectDB().then(() => {
    app.listen(PORT, () => {
      console.log("Server is running at " + PORT);
    });
})
