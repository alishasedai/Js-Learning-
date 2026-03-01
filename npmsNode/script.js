// const fs = require("fs");
// fs.writeFile("hey.txt", "hello Alsiha Tum kaise ho", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Done");
//   }
// });
// const fs = require("fs");
// fs.appendFile(
//   "hey.txt",
//   " Hi i am fine but i dont remeber you who are you",
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Done");
//     }
//   },
// );

// const fs = require("fs");
// fs.copyFile("hey.txt","./copy/a.txt", function(err){
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Done");
//     }
// })

// const fs = require("fs");
// fs.unlink("hey.txt",function(err){
//     if(err) console.log(err);
//     else console.log("Remove Done")
// })

// const fs = require("fs");

// fs.rmdir("./copy",{recursive:true},function(err){
//     if(err) console.log(err);
//     else console.log("Removed the file")
// })
// fs.mkdir("./copy",function(err){
//     if(err) console.log(err);
//     else console.log("Copy folder name created")
// })

//reading the file from the folder

// fs.readFile("./copy/index.html", "utf8", function (err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });

// const http = require("http");
// const server = http.createServer(function(req,res){
//     res.end("hello Alisha");
// })
// server.listen(3000);
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

// ✅ Root route
app.get("/", function (req, res) {
  // Use __dirname for safe absolute path
  fs.readdir(path.join(__dirname, "files"), function (err, fil) {
  
    res.render("index", { files: fil});
  });
});
app.post("/create", function(req, res) {
    
    fs.writeFile
      (path.join(__dirname, "files",req.body.title.split(" ").join("")+".txt"),
      req.body.details,
      function (err) {
        res.redirect("/");
      }
    );
    console.log(req.body);

// Start server

})
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});