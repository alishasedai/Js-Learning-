const express = require("express");
const ConnectDB = require("./db/db");
const StudentModel = require("./models/UserModel");
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors());

ConnectDB();

app.get("/getAllStudent",async(req,res) => {
    const allData = await StudentModel.find();
    res.json({
        message : "All student data fetched successfully",
        sucess : true,
        alldata : allData
    })
})

app.post("/createStudent",async(req,res) => {
    const {name,email,password,address} = req.body;

    const studentData = await StudentModel.create({
        name,email,password,address
    })
    res.json({
        message : "Student data created successfully",
        success : true,
        student : studentData
    })
})

app.delete("/deleteStudent/:id",async(req,res) => {
    const id = req.params.id;
    const deleteStudent = await StudentModel.findByIdAndDelete(id)
    res.json({
        message : "Student data deleted successfully",
        success : true
    })
})

app.listen(3000,(req,res) => {
    console.log("Server is running at port 3000");
    
})