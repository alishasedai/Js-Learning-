import mongoose from "mongoose";

const UserSchema  = new mongoose.Schema({
    name : String,
    email : String,
    address : String
})
const Users = mongoose.model("users",UserSchema);

export default Users