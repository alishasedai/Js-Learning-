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

const verifyAdmin = (req,res,next) => {
    if(req.user.role !== "admin"){
        return res.status(403).json({
          message: "Access denied. Admin only.",
        });
    }
    next()
}
module.exports = {verifyToken,verifyAdmin}