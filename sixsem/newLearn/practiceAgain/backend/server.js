const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db");
const User = require("./models/UserModel")

const app = express();
connectDB();
app.use(express.json());
app.use(cors())

app.get("/",async(req,res) =>{
    try {
           const allUser = await User.find();
           res.json({
             message: "Get all user hehehehe..",
             user: allUser,
           });
    } catch (error) {
        res.json({
            message : "error fetching all the users"
            
        })
    }
})
app.post("/hel",async(req,res) => {
  try {
      const u = await User.create({
        name: req.body.name,
        address: req.body.address,
      });
      // console.log("Data from the frontend ...",u);
      res.json({
        message: "User created successfully..",
        data: u,
      });
  } catch (error) {
    res.json({
        message : "Error creating the users"
    })
  }  
})
app.patch("/updateUser/:id",async(req,res) => {
  console.log("Updatedddd from the updated user..");    
   try {
     const id = req.params.id;
     const users = await User.findByIdAndUpdate(id, {
       $set: { name: req.body.name, address: req.body.address },
     });
     res.json({
       message: "User updated successfully",
     });
   } catch (error) {
    console.log("error updating the data...",error.message);    
   }
})

app.delete("/handleDelete/:id",async(req,res) => {
    const id = req.params.id;
    const deletes = await User.findByIdAndDelete(id);
    const alldata = await User.find();
    res.json({
        message : "Users deleted successfully...",
        users : alldata
    })
})
app.listen(3000,() => {
    console.log("I am running hehe");
    
})