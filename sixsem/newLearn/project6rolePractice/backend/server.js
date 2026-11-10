const express = require("express");
const cors = require("cors")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser")
const connectDB = require("./db/db");
const UserModel = require("./models/UserModel")
const {verifyToken,verifyAdmin} = require("./middleware/authMiddleware")
const { hashPassword, comparePassword } = require("./utils/password");

const AnnouncementModel = require("./models/AnnoucementSchema");

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
            name,email,password:hashPass,gender,
            role : "student"
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
        console.log("Email received:", email);
        console.log("User found:", findUser);
        if (!findUser) {
          return res.status(401).json({
            message: "User not found",
          });
        }


        const matchPass = await bcrypt.compare(password,findUser.password);
        if(!matchPass){
            return res.json({
                message : "Incorrect password "
            })
        }
        const token = jwt.sign({
            email,
            gender :findUser.gender,
            role : findUser.role
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
        console.log("Error login",error.message);
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

app.post("/annoucements",verifyToken,verifyAdmin,async(req,res) => {
    try {
          const { title, description, gender } = req.body;

          const annoucement = await AnnouncementModel.create({
            title,
            description,
            gender,
          });
          res.status(201).json({
            message : "Annoucement created successfully",
            annoucement : annoucement
          })
    } catch (error) {
         res.status(400).json({
           message: "Failed to create announcement",
           error: error.message,
         });
    }
})

app.get("/annoucements",verifyToken,async(req,res) => {
    try {
        const annoucements = await AnnouncementModel.find({
          $or: [
            { gender: req.user.gender },
            {
              gender: "all",
            },
          ]
        });
        console.log("Annoucements : ",annoucements);
        
        res.status(200).json({
          message: "Announcements fetched successfully",
          announcements: annoucements,
        });
    } catch (error) {
        res.status(500).json({
          message: "Failed to fetch announcements",
          error: error.message,
        }); 
    }
})

app.get("/admin/annoucements", verifyToken, verifyAdmin, async (req, res) => {
  try {
    const announcements = await AnnouncementModel.find({});

    res.status(200).json({
      message: "All announcements fetched successfully",
      announcements,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch announcements",
      error: error.message,
    });
  }
});

app.post("/logout",(req,res) => {
  res.clearCookie("token",{
    httpOnly : true,
    secure : false,
    sameSite : "lax"
  });
  res.json({
    message : "Logout successfully"
  })
})
app.listen(3000,() => {
    console.log("server is listening at port 3000");
    
})