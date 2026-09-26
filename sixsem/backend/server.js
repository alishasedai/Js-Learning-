require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db") 
const errorHandler = require("./middleware/errorMiddleware");
const productRoutes = require("./routes/productRoutes");
const userRoutes  = require("./routes/userRoutes")
const authMiddleware = require("./middleware/authMiddleware")
const passport = require("./config/passport")
const session = require("express-session");
const { login } = require("./controllers/practiceController");

console.log("SESSION_SECRET:", process.env.SESSION_SECRET);
const app = express();
app.use(express.json());
app.use(
  session ({
    secret :process.env.SESSION_SECRET,
    resave : false,
    saveUninitialized : false
  })
)
app.use(passport.initialize());
app.use(passport.session());
app.use("/api", productRoutes);
app.use("/user",userRoutes);
app.use(errorHandler);
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account"
  }),
);

app.get("/auth/google/callback",
  passport.authenticate("google",{
    failureRedirect : "/login"
  }),
  (req,res) => {
    console.log("Logged in user..");
    console.log(req.user); 
    res.json({
      message : "Google Login successfully",
      user : req.user
    })
  }
)
connectDB();

app.listen(4000, () => {
  console.log("Server is running at port 4000");
});
