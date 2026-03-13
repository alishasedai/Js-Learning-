const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");

router.get("/",function(req,res){
    let error = req.flash("error");
    res.render("index",{ error })
})


router.get("/shop", isLoggedIn,  function (req, res) {
//   let products = await productModel.find();
  res.render("shop");
});
router.get("/logout", isLoggedIn, async function (req, res) {
  //   let products = await productModel.find();
  res.render("shop");
});


module.exports = router;

