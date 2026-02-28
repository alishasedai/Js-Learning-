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
const fs = require("fs");
// fs.mkdir("./copy",function(err){
//     if(err) console.log(err);
//     else console.log("Copy folder name created")
// })

//reading the file from the folder

fs.readFile("./copy/index.html", "utf8", function (err, data) {
  if (err) console.log(err);
  else console.log(data);
});
