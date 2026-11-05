const express = require("express");
const app = express();
const connectDB = require("./config/db")
const stdModel = require("./models/studentModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const {verifyLogin} = require("./middleware/authMiddleware")

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials : true
  }),
);

connectDB()
app.get("/",(req,res) => {
    res.json({
        message : "hello i am running hehehe"
    })
})
app.post("/register",async(req,res) => {
try {
   const { std_name, std_email, std_gender, std_password } = req.body;

   if (!std_password) {
     return res.status(400).json({
       message: "Password is required"
     });
   }
   const hashPass = await bcrypt.hash(std_password, 10);
   const stdRegister = await stdModel.create({
     std_name,
     std_email,
     std_gender,
     std_password: hashPass,
   });

   res.json({
     message: "Register successful",
     loginStd: stdRegister,
   });
} catch (error) {
   console.log(error);
   res.status(500).json({
     message: "Registration failed",
   });
}
})

app.post("/login", async (req, res) => {
  const { std_email, std_password } = req.body;
  const findStd = await stdModel.findOne({ std_email });
  if (!findStd) {
    return res.status(404).json({
      message: "Student not found please register first",
    });
  }
  console.log("Find std : ", findStd);

  const matchPass = await bcrypt.compare(std_password, findStd.std_password);

  if (!matchPass) {
    return res.json({
      message: "Invalid password",
    });
  }

  const token = await jwt.sign(
    {
      id: findStd._id,
      name: findStd.std_email,
    },
    "alishasecretKey",
    {
      expiresIn: "1D",
    },
  );
     res.cookie("token", token, {
       httpOnly: true,
       secure: false,
       sameSite: "lax",
       maxAge: 24 * 60 * 60 * 1000,
     });
  res.json({
    message: "Login successful"
  });
});

app.post("/profile",verifyLogin,(req,res) => {
    res.json({
        message :"your profile",
        user : req.user
    })
})
app.listen(3000,(req,res) => {
    console.log("Server is running at port 3000");
    
})




