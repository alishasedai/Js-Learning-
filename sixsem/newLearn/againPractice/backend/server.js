import express from "express";
const app = express();
import connectDB from "./db/db.js";
import Users from "./models/UserModel.js";
import cors from "cors";

connectDB();
app.use(express.json())
app.use(cors());

app.get("/",async(req,res) => {
    const getData = await Users.find();

    res.json({
        message : "Fetched all data hehe",
        allData : getData
    })
})

app.post("/createUser",async(req,res) => {
    console.log("Data : ",req.body.name);
    
    const userData = await Users.create({
        name : req.body.name,
        email : req.body.email,
        address : req.body.address
    })
    res.json({
        message : "Users data is created hehheehhe..",
        data : userData
    })
})

app.listen(3000,() => {
    console.log("Server is listening at port 3000...");
    
})

