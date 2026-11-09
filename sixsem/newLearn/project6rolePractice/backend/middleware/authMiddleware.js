const jwt = require("jsonwebtoken");


const verifyToken = (req,res,next) => {
    const token = req.cookies.token;
    if(!token){
        return res.json({
            message : "Cannot find token"
        })
    }
    const decode = jwt.verify(token, "alisha123");
    if(decode){
        
            req.user = decode
       next();
    }

}
module.exports = {verifyToken}