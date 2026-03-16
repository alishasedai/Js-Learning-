const userModel = require("../models/userModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken")
async function checkPassword(req,res){
    
    try{
        const {password ,userid} = req.body;
        console.log(req.body)
        const user = await userModel.findById(userid)
        if (!user) {
          return res.status(404).json({
            message: "User not found",
            error: true,
          });
        }
        const verifyPassword = await bcryptjs.compare(password,user.password);
        
        if(!verifyPassword){
            return res.status(400).json({
                message : "Password didnt match",
                error : true
            })
        }
        const tokenData = {
            id : user._id,
            email : user.email
        }

        const cookieOptions = {
          httpOnly: true,
          secure: false,
        };
        const token =await jwt.sign(tokenData, process.env.JWT_SECRET_KEY);
        

        return res.cookie('token',token,cookieOptions).status(200).json({
            message : "Login Successfully",
            token : token,
            success : true
        })
        
    }catch(err){
       return res.status(500).json({
        message : err.message || err,
        error : true
       })
    }
}
module.exports = checkPassword
