const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const userModel = require("../models/user-model");
const productModel = require("../models/product-model");
// const { use } = require("react");

router.get("/",function(req,res){
    let error = req.flash("error");
    res.render("index",{ error ,isLoggedIn:false})
})


router.get("/shop", isLoggedIn, async function (req, res) {
  let products = await productModel.find();
  let success = req.flash("success");
  res.render("shop",{products,success});
});
router.get("/cart", isLoggedIn, async function (req, res) {
  let user = await userModel.findOne({email :req.user.email}).populate("cart");
  let totalPrice = Number(user.cart[0].price) - Number(user.cart[0].discount) +20
  
 
  res.render("cart",{user,totalPrice});
});

router.get("/addtocart/:productid", isLoggedIn, async function (req, res) {
  let user = await userModel.findOne({email :req.user.email});
  user.cart.push(req.params.productid);
  await user.save();

  req.flash("success","Added to cart..")
  console.log(user);
 res.redirect("/shop")
});


router.get("/logout", isLoggedIn, async function (req, res) {
   req.token = ("token","");
   res.render("/")
});


module.exports = router;

