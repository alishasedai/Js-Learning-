const mongoose = require("mongoose");
const debug = require("debug")("development:mongoose")
mongoose
.connect("mongodb://127.0.0.1:27017/project")
.then(function(){
    debug("Connected");
})
.catch(function(err){
    debug(err)
})
module.exports = mongoose.connection;