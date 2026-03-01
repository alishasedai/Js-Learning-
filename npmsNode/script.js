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
const { render } = require("ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

// ✅ Root route
app.get("/", function (req, res) {
  // Use __dirname for safe absolute path
  fs.readdir(path.join(__dirname, "files"), function (err, fil) {
  
    res.render("index", { fileAlisha: fil});
  });
});

app.get("/file/:filename", function (req, res) {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err,filedata){
    console.log(filedata);
    res.render("show", {fileLelo :req.params.filename, filedata : filedata})
  })
});

app.get("/edit/:filename",function(req,res){
  res.render("edit" ,{fileName : req.params.filename});
})

app.post("/edit", function (req, res) {
  const oldPath = path.join(__dirname, "files", req.body.previous);
  const newPath = path.join(__dirname, "files", req.body.new)
  fs.rename(oldPath,newPath,function(err){
   
  res.redirect("/");
    
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
})
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});