const errorHandler = (error,req,res,next) => {
console.log("Error : ",error.message);
if(error.name === "ValidationError"){
    return res.status(400).json({
        success : false,
        message : error.message
    })
}
if (error.name === "CastError"){
    return res.status(400).json({
        success : false,
        message : "Error : Invalid Product Id.. "
    })
}
  res.status(500).json({
    success: false,
    message: "error: " + error.message,
  });
}
module.exports = errorHandler