const express = require("express");

const userRoutes = express.Router();
const {registered,login,tests} = require("../controllers/practiceController")
const {registerUser,loginUser,myProfile} = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware")
const {auths} = require("../middleware/p");
userRoutes.post("/register",registerUser);
userRoutes.post("/regist",registered);
userRoutes.post("/l",login)

console.log("registered:", typeof registered);
console.log("login:", typeof login);
console.log("authMiddleware:", typeof authMiddleware);
console.log("practice:", typeof auths);
console.log("myProfile:", typeof myProfile);
userRoutes.post("/test",auths,tests)
userRoutes.post("/login",loginUser);
userRoutes.post("/profile/:id",authMiddleware,myProfile);

module.exports = userRoutes