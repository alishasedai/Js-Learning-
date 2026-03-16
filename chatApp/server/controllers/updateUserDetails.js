const getUserDetailsFromToken = require("../helpers/getUserDetailsFromToken");
const userModel = require("../models/userModel");

async function udpdateUserDetails(req,res){
    try{
        const token = req.cookies.token || "";
        const user = await getUserDetailsFromToken(token);
        

       const {name, email,profile_pic} = req.body;
       const updateUser = await userModel.updateOne(
         { _id: user._id },
         {
           name,
           email,
           profile_pic,
         },
         { new: true },
       );
       const userInformation =await userModel.findById(user._id)
       console.log(userInformation);
        return res.status(200).json({
            message : " user updated successfully",
            data : userInformation,
            success : true
        })
    }catch(err){
        return res.status(500).json({
            message : err.message || err,
            error : true
        })
    }
}

module.exports = udpdateUserDetails