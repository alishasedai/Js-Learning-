const UserModel = require("../models/userModel")

async function searchUser(req,res) {
    try{
        console.log("body",req.body)
        const {search} = req.body?.search;
        
        const query = new RegExp(search,"i","g")
        const user = await UserModel.find({
            "$or" : [
                {name : query},
                {email : query}
            ]
        }).select("-password");
        return res.json({
            message : "All user",
            data : user || [],
            success : true
        })
    }
    catch(err){
        return res.status(500).json({
            message : err.message || err,
            error : true
        })
    }
    
}
module.exports = searchUser 