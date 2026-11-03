const mongoose = require("mongoose");

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

function ConnectDB(){
    mongoose.connect("mongodb+srv://alishasedai21_db_user:ENer9bVgz6dY6tA2@testing.yrat7px.mongodb.net/studentData")
    .then(() => {
        console.log("Mongodb connected successfully");
    })
    .catch((err) => {
        console.log("Mongodb cannot be connected");
    })

}
module.exports = ConnectDB;