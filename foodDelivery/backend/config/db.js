import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://alishasedai:alisha12@cluster0.y7qkxw3.mongodb.net/foodDelivery?retryWrites=true&w=majority&appName=Cluster0",
    );

    console.log("DB Connected");
  } catch (error) {
    console.log("error",error);
  }
};
