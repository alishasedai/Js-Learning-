const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel")
const getUserDetailsFromToken = async (token) => {
    if(!token){
        return {
            message : "Session Out",
            logout : true
        }
    }
    const decode =   jwt.verify(token,process.env.JWT_SECRET_KEY)
    const user = await userModel.findById(decode.id);
    return user
}

module.exports = getUserDetailsFromToken