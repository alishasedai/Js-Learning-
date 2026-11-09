const express = require("express");
const cors = require("cors")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser")
const connectDB = require("./db/db");
const UserModel = require("./models/UserModel")
const {verifyToken} = require("./middleware/authMiddleware")

const app = express();
connectDB();

app.use(express.json());
app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}));
app.use(cookieParser());

app.post("/register",async(req,res) => {
    try {
        const {name,email,password,gender} = req.body;
        const hashPass = await bcrypt.hash(password,10);

        const createUser = await UserModel.create({
            name,email,password:hashPass,gender
        })
         res.json({
           message: "User registered successfully",
           user: createUser,
         });

    } catch (error) {
        console.log("Error registering the user");
        res.status(400).json({
          message: "Registration failed",
          error: error.message,
        });
    }
   
})

app.post("/login",async(req,res) => {
    try {
        const {email,password} = req.body;
        const findUser = await UserModel.findOne({email});

        const matchPass = await bcrypt.compare(password,findUser.password);
        if(!matchPass){
            return res.json({
                message : "Incorrect password "
            })
        }
        const token = jwt.sign({
            email,
            gender :findUser.gender
        },
            "alisha123", //secret key
            {
                expiresIn : "1D"
            }
    )
    console.log("Token",token);
        res.cookie("token",token,{
            httpOnly : true,
            sameSite : "lax",
            secure : false,
            maxAge : 24*60*60*1000 
        })
        res.json({
            message : "Login successfully"
        })

    } catch (error) {
        console.log("Error login");
        res.status(400).json({
            message : "Login failed",
            error : error.message
        })
    }
})

app.post("/profile",verifyToken,(req,res) => {

    res.json({
        message : "Welcome",
        user : req.user
    })
})
app.listen(3000,() => {
    console.log("server is listening at port 3000");
    
})