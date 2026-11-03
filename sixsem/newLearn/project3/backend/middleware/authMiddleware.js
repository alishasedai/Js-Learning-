const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if(!token){
         return   res.json({
                message : "No token is provided"
            })
        }
        const decoded = jwt.verify(token,"alisha");
        console.log("decoded : ",decoded);
        req.user = decoded
        next();

    } catch (error) {
    return res.status(401).json({
        message: "error.message "
    });
}
    
}
module.exports = verifyToken;