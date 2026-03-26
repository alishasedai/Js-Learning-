const express = require("express");
const registerUser = require("../controllers/registerUser");
const checkEmail = require("../controllers/checkEmail");
const checkPassword = require("../controllers/checkPassword");
const userDetails = require("../controllers/userDetails")
const logout = require("../controllers/logout")
const udpdateUserDetails = require("../controllers/updateUserDetails");
const searchUser = require("../controllers/searchUser");

const router = express.Router()

//create the user API
router.post("/register",registerUser);
//check user email
router.post("/email",checkEmail);
//check user password
router.post("/password",checkPassword);
//login user details
router.get("/user-details",userDetails);
//update User Details
router.post("/update-details",udpdateUserDetails)
//search user details
router.post("search-user",searchUser)
//logout
router.get("/logout",logout)


module.exports = router