const validate = (req,res,next) => {
    if(!req.body.name || req.body.price === undefined){
        return res.status(400).json({
            success : false,
            message : "Name and price are required.."
        })
    }
    if(typeof req.body.price !== "number"){
        return res.status(400).json({
            success : false,
            message : "Price must be number.."
        })
    }
    if(req.body.price <=0){
        res.status(400).json({
            success : false,
            message :"Price must be greater than 0"
        })
    }
    next();
}

module.exports = validate

