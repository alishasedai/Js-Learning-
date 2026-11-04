const jwt = require("jsonwebtoken");

const verifyToken = async(req,res,next) => {
    // const token = req.headers.authorization?.split(" ")[1];
    const token = req.cookies.token;
    
    if(!token){
        return res.json({
            message : "Didnt get the token"
        })
    }
    const decoded = await jwt.verify(token, "alis");
    req.user = decoded;
    
    next();

}
module.exports = verifyToken;