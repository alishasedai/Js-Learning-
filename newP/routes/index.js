const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const userModel = require("../models/user-model");
const productModel = require("../models/product-model")

router.get("/",function(req,res){
    let error = req.flash("error");
    res.render("index",{ error ,isLoggedIn:false})
})


router.get("/shop", isLoggedIn, async function (req, res) {
  let products = await productModel.find();
  res.render("shop",{products});
});

router.get("/addtocart/:id", isLoggedIn, async function (req, res) {
  let user = await userModel.findOne({email :req.user.email});
  console.log(user)
 res.send("hhehe")
});


// router.get("/logout", isLoggedIn, async function (req, res) {
 //   let products = await productModel.find();
//   res.render("shop");
// });


module.exports = router;

