import mongoose from "mongoose";
import dns from "dns"

dns.setServers(["8.8.8.8", "8.8.4.4"]);

function connectDB(){
    mongoose
      .connect(
        "mongodb+srv://alishasedai21_db_user:ENer9bVgz6dY6tA2@testing.yrat7px.mongodb.net/practiceAgain",
      )
      .then((data) => {
        console.log("MONGODB CONNECTED..");
      })
      .catch((err) => {
        
        console.log("Mongodb cannot be connected...");
      });
}
export default connectDB;