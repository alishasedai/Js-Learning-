const express = require("express");
const ConnectDB = require("./db/db");
const StudentModel = require("./models/UserModel");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("./middleware/authMiddleware")

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

app.post("/register",async(req,res) => {
    const {name,password,email} = req.body
    const hashPass = await bcrypt.hash(password,10);

    const regsiterUser = await StudentModel.create({
        name ,
        email,
        password : hashPass
    })
    res.json({
        message : "Registered successfully",
        success : true,
        data : regsiterUser
    })

})
app.post("/login",async(req,res) => {
    const {email,password,name} = req.body;

    const student = await StudentModel.findOne({email});

    if(!student){
        return res.status(404).json({
            message : "Student not found"
        })

    }
    const isMatch = await bcrypt.compare(password,student.password);

    if(!isMatch){
        return res.status(401).json({
            message : "Invalid password"
        })
    }
    const token = jwt.sign({
        id : student._id,name : student.name
    },
    "alisha",
    {
        expiresIn : "1d"
    }
    )
    res.json({
        message : "Login successfull",
        token : token
    })
})

app.get("/profile",verifyToken,(req,res) => {
    res.json({
        message : "Welcome to your profile",
        data : req.user
    })
})
app.listen(3000,(req,res) => {
    console.log("Server is running at port 3000");
    
})