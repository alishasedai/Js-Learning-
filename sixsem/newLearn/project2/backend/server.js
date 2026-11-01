const express = require("express");
const connectDB = require("./db/db")
const Users = require("./models/UserModel");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.get("/",async(req,res) => {
    const allUsers = await Users.find();

    res.json({
        message : "All data shown successfully",
        data : allUsers
    })
})
app.get("/getUser/:id",async(req,res) => {
  try {
    const findUser = await Users.findById(req.params.id);
    if(!findUser){
      return res.status(404).json({
        message : "User not found"
      })
    }
    res.status(200).json({
      findUser
    })
  } catch (error) {
     res.status(500).json({
       message: error.message,
     });
  }
})

app.post("/createData",async (req,res) => {
  try {
      const { name, email, address } = req.body;
      const createUser = await Users.create({
        name: name,
        email: email,
        address: address,
      });

      res.json({
        message: "User created successfully..",
        data: createUser,
      });
  } catch (error) {
    console.log("Error creating : ",error.message);
    
  }
})

app.delete("/deleteData/:id",async(req,res) => {
   try {
     const id = req.params.id;
     const deleteUser = await Users.findByIdAndDelete(id);

     res.json({
       message: "User deleted successfully",
     });
   } catch (error) {
    console.log("Error deleting the users");
    
   }
})

app.patch("/updateUser/:id",async(req,res) => {
    const id = req.params.id;
    const {name,email,address} = req.body;
    const updateUser = await Users.findByIdAndUpdate(id,{
        name ,email,address
    },{
      new : true
    })
    res.json({
        message : "User updated successfully",
        updatesUser : updateUser
    })
})
app.listen(3000,() => {
    console.log("Server running at port 3000");    
})