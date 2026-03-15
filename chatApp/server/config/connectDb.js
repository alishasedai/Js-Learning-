const mongoose = require("mongoose");

async function connectDB() {
  try {
    console.log("Mongo URI:", process.env.MONGODB_URI);

    await mongoose.connect(process.env.MONGODB_URI);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Connected to MongoDB");
    });

    connection.on("error", (err) => {
      console.log("MongoDB connection error:", err);
    });
  } catch (err) {
    console.log("Something is wrong", err);
  }
}

module.exports = connectDB;
