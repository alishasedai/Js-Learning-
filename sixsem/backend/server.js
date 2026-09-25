require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db") 
const errorHandler = require("./middleware/errorMiddleware");
const productRoutes = require("./routes/productRoutes");
const userRoutes  = require("./routes/userRoutes")
const authMiddleware = require("./middleware/authMiddleware")

const app = express();
app.use(express.json());

app.use("/api", productRoutes);
app.use("/user",userRoutes);
app.use(errorHandler);
connectDB();
app.listen(4000, () => {
  console.log("Server is running at port 4000");
});
