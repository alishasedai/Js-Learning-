const express = require("express");
const registerUser = require("../controllers/registerUser");
const checkEmail = require("../controllers/checkEmail");
const checkPassword = require("../controllers/checkPassword")

const router = express.Router()

//create the user API
router.post("/register",registerUser);
//check user email
router.post("/email",checkEmail);
//check user password
router.post("/password",checkPassword)

module.exports = router