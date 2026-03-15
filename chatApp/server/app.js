require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes/index")
const cookieParser = require("cookie-parser")

const connectDB = require("./config/connectDb");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true }))
app.use(cookieParser())

const PORT = process.env.PORT || 8080;
app.get("/", function (req, res) {
  res.json({
    message: "i am running",
  });
});

//api endpoints
app.use("/api",router)




connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running at " + PORT);
  });
});
