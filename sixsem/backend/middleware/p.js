const jwt = require("jsonwebtoken");
const auths = (req,res,next) => {
  const token = req.headers.authorization;
  if(!token){
    return res.status(401).json({
        success : false,
        message : "Token is required"
    })
  }
 try{
     const validToken = jwt.verify(token,process.env.JWT_SECRET);
     req.user = validToken
     next()
 }catch(error){
    return res.status(401).json({
        success : false,
        message : "Token is not valid"
    })
 }

   
}
module.exports = {auths}

