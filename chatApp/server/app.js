require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const connectDB = require("./config/connectDb");

app.use(cors());

app.get("/", function (req, res) {
  res.json({
    message: "i a running",
  });
});

const PORT = process.env.PORT || 8080;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running at " + PORT);
  });
});
