const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Atlas Connected");
  } catch (error) {
    console.log("MongoDB Connection Error:", error.message);
  }
};



module.exports = connectDB;
