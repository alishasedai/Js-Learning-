const mongoose = require("mongoose");
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
async function ConnectDB() {
  await mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => {
        console.log("MongoDB Connected..");
      })
      .catch((err) => {
        console.log("MongoDB Connection failed.");
      });
}
module.exports = ConnectDB;