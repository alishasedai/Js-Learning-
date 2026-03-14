// const flash = require("flash");
// const userModel = require("../models/user-model")
// const jwt = require("jsonwebtoken");
// module.exports = async function (req,res) {
//     if(!req.cookies.token){
//         req.flash("error","You need to login first")
//         return res.redirect("/")
//     }
//     try{
//         let decoded = jwt.verify(req.cookies.token,process.env.JWT_KEY);
//         let user = await userModel.findOne({
//             email:decoded.email
//         }).select("-password");
//         req.user = user;
//         next();

//     }
//     catch(err){
//         req.flash("error","Something is wrong. here from islogged In");
//       return  res.redirect("/")
//     }
// }
const flash = require("flash");
const userModel = require("../models/user-model");
const jwt = require("jsonwebtoken");

module.exports = async function (req, res, next) {
  try {
    if (!req.cookies.token) {
      req.flash("error", "You need to login first");
      return res.redirect("/");
    }

    const decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);

    const user = await userModel
      .findOne({ email: decoded.email })
      .select("-password");
    if (!user) {
      req.flash("error", "User not found");
      return res.redirect("/");
    }

    req.user = user;
    next();
  } catch (err) {
    console.log("isLoggedIn error:", err.message); // log actual error
    req.flash("error", "Something is wrong (from isLoggedIn)");
    return res.redirect("/");
  }
};