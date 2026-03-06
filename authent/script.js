const express = require("express");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const app = express();

app.use(cookieParser());

// app.get("/",function(req,res){
//     res.cookie("name","AluSedai");
//     res.send("done");
// })
// app.get("/read",function(req,res){
//     console.log(req.cookies);
//     res.send("Cookie read")
// })
// app.get("/",function(req,res){
//     bcrypt.genSalt(10, function (err, salt) {
//       bcrypt.hash("Arush", salt, function (err, hash) {
//         console.log(hash)
//         res.send(hash); 
//       });
//     });
// })
// app.get("/read",function(req,res){
//     bcrypt.compare(
//       "Arusha",
//       "$2b$10$kvK1z0QzYd9mXcb5bZ5iTOUcoB8b1x0RWY0zZNFQ3t7azkOSX69SO",function(err,result){
//         console.log(result)
//         res.send(result)
//       }
//     );
// })
//$2b$10$kvK1z0QzYd9mXcb5bZ5iTOUcoB8b1x0RWY0zZNFQ3t7azkOSX69SO

app.get("/",function(req,res){
   let token =  jwt.sign({email:"alisha@gmail.com"},"secret")
   console.log(token);
   res.cookie("token",token);

   res.send("hello hehe")
})

app.get("/read",function(req,res){
    console.log(req.cookies.token);
    let data = jwt.verify(req.cookies.token,"secret");
    console.log(data);
    res.send("Done")
    
})
app.listen(3000)