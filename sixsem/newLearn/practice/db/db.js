const mongoose = require("mongoose");
const dns = require("dns");
dns.setServers(["1.1.1.1","8.8.8.8"])
async function connectDB() {
    await mongoose
      .connect(
        "mongodb+srv://alishasedai21_db_user:ENer9bVgz6dY6tA2@testing.yrat7px.mongodb.net/",
      )
      .then(() => {
        console.log("MongoDB connected");
      })
      .catch((err) => {
        console.log("MongoDB connection error:", err);
      });
}
  
module.exports = connectDB;
