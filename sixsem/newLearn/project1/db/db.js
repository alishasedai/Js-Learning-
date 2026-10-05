const mongoose = require("mongoose");
const dns = require("dns")
dns.setServers(["1.1.1.1","8.8.8.8"])
   async function ConnectDb() {
     await   mongoose.connect(
        process.env.MONGO_URI
  
)
.then(() => {
    console.log("MongoDB Connected..");
    
})
.catch((err) => {
    console.log("MongoDb Connection Error ..",err);
    
});
    }
module.exports = ConnectDb;