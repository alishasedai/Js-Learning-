const express= require("express");
const router = express.Router();
const ownersModel = require("../models/owner-model")

console.log(process.env.NODE_ENV)
router.get("/",function(req,res){
  res.send("hey its working from ownersRouter")  
});

if(process.env.NODE_ENV === "development"){
  console.log(process.env.NODE_ENV);
  router.post("/create",async function (req, res) {
    let owners = await ownersModel.find();
    if(owners.length>0){
    return  res.status(500).send("You dont have permission to create a new owner");

    }
    let {fullname,email,password} = req.body;
    let createdUser =  await ownersModel.create({
      fullname,email,password
    })
    res.status(201).send(createdUser);

  });
}

router.get("/admin",async function(req,res){
  let success = req.flash("success")
  res.render("createproducts",{success});
});

module.exports = router