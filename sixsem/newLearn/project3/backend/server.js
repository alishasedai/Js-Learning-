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

app.patch("/editStudent/:id",async(req,res)=> {
    const id =req.params.id
    console.log("Request params id ",req.params.id);
    
    const{name,email,address,password} = req.body
    console.log("Request.bidy",req.body);
    
    const dataUpdate = await StudentModel.findByIdAndUpdate(id,{
        name,email,address,password
    },{
        new : true
    }
    )
    res.json({
        message : "Student data updated successfully",
        success : true,
        updateData :dataUpdate
    })
})

app.get("/getStudent/:id",async(req,res) => {
    const id = req.params.id;

    const getSingleStudent = await StudentModel.findById(id);
    res.json({
        message : "Single student fetched successfully",
        success : true,
        data : getSingleStudent
    })
})
app.listen(3000,(req,res) => {
    console.log("Server is running at port 3000");
    
})