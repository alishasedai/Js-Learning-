const flash = require("flash");
const { JsonWebTokenError } = require("jsonwebtoken");
module.exports = async function (req,res) {
    if(!req.cookies.token){
        req.flash("error","You need to login first")
        return res.redirect("/")
    }
    try{
        let decoded = JsonWebTokenError.verify(req.cookies.token,process.env.JWT_KEY);
        let user = await userModel.findOne({
            email:decoded.email
        }).select("-password");
        req.user = user;
    }
    catch(err){
        req.flash("error","Something is wrong.");
        req.redirect("/")
    }
}