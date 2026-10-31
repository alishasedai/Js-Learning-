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
    const {name,email,password} = req.body;
    const updateUser = await Users.findByIdAndUpdate(id,{
        name ,email,password
    })
    res.json({
        message : "User updated successfully",
        updatesUser : updateUser
    })
})
app.listen(3000,() => {
    console.log("Server running at port 3000");    
})