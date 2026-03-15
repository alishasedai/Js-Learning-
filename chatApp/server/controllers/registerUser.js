async function registerUser(req,res){
    try{
        const {name,email,password,profile_pic} = req.body
    }catch(err){
        return res.status(500).json({
            message : err.message || err,
            err:true
        })

    }

}