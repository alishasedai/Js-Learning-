const mongoose = require("mongoose");
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

    function connectDB() {
     mongoose.connect(
      "mongodb+srv://alishasedai21_db_user:ENer9bVgz6dY6tA2@testing.yrat7px.mongodb.net/myUser",
    )
    .then(() => {
        console.log("Mongodb Connected..");
    })
    .catch((err) => {
        console.log("Mongodb connection failed...",err.message); 
    })

}
module.exports = connectDB;

