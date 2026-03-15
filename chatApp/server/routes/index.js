const express = require("express");
const registerUser = require("../controllers/registerUser");
const router = express.Router()

//create the user API
router.post("/register",registerUser);

module.exports = router