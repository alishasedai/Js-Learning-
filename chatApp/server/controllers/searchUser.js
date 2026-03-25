async function searchUser(req,res) {
    try{
        const {search} = req.body
    }
    catch(err){
        return response.status(500).json({
            message : err.message || err,
            error : true
        })
    }
    
}