const express = require("express");
const ConnectDb = require("./config/db");
const EmployeeModel = require("./models/EmployeeModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("./middleware/authMiddleware");


ConnectDb();
const app = express();
app.use(express.json());

app.get("/",(req,res) => {
    res.json({
        message : "helllo hehhe"
    })
})

app.post("/register",async(req,res) => {
    const {emp_name,emp_email,emp_password,emp_gender,emp_position,emp_salary,emp_role} = req.body;
    const hashedPassword = await bcrypt.hash(emp_password,10);

    const createEmployee = await EmployeeModel.create({
        emp_name,emp_email,emp_gender,emp_salary,emp_position,
        emp_password : hashedPassword,emp_role
    });

    res.json({
        message : "employee registered successfully",
        emp_data : createEmployee
    })
})

app.post("/login",async(req,res) => {
   try {
     const { emp_email, emp_password } = req.body;
     const employee = await EmployeeModel.findOne({ emp_email });
     const isMatched = await bcrypt.compare(
       emp_password,
       employee.emp_password,
     );
     if (!isMatched) {
       return res.json({
         message: "Invalid password",
       });
     }
     const token = jwt.sign({
        id : employee._id,
        name : employee.emp_name,
        role : employee.emp_role
     },
    "alis",
        {
            expiresIn : "1D"
        })

     res.json({
       message: "Employee login successfully",
       token : token
     });
   } catch (error) {
    console.log("Error : ",error.message);
        return res.status(500).json({
          message: "Internal server error",
        });
    
   }
})

app.post("/profile",verifyToken,(req,res) => {
    res.json({
        message : "your profile",
        user : req.user
    })
})
app.listen(3000,() => {
    console.log("Server is running at port 3000");
    
})