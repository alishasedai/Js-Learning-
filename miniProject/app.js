const express = require("express");
const userModel = require("./models/user");
const postModel = require("./models/post")
const cookieParser = require("cookie-parser")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const post = require("./models/post");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.set("view engine","ejs")
app.get("/",function(req,res) {
    res.render("index")
})
//create the account
app.post("/register",async function(req,res){
    let {email,password,name,username,age} = req.body;

    let users =await userModel.findOne({email});
    if(users) return res.status(500).send("User already registered");

    bcrypt.genSalt(10, function(err,salt){
        bcrypt.hash(password,salt,async function(err,hash){
            let createdUser =await userModel.create({
                name,
                email,
                password:hash,
                username,
                age

            });
            let token = jwt.sign({email:email,userid:createdUser._id},"shh");
            res.cookie("token",token)
            res.send(createdUser)
        })
    })
    
})

app.get("/login",function(req,res){
    res.render("login")
})
app.get("/profile",isLoggedIn,async function(req,res){
    let data = await userModel
      .findOne({ email: req.user.email })
      .populate("post");;
    // console.log(data);
    res.render("profile",{data});
    
})
app.get("/like/:id",isLoggedIn,async function(req,res){
    let postLike =await postModel.findOne({_id:req.params.id}).populate("user");
    
    if(postLike.likes.indexOf(req.user.userid) === -1){
         postLike.likes.push(req.user.userid);
    }else{
        postLike.likes.splice(postLike.likes.indexOf(req.user.userid),1);
    }
   
    await postLike.save();
   
    res.redirect("/profile")

})
app.post("/post",isLoggedIn,async function(req,res){
    let users = await userModel.findOne({email:req.user.email});
    let {content} =req.body;
    let data =await postModel.create({
       user : users._id ,
        content :content,
    })
    users.post.push(data._id);
   await users.save();
   
    // console.log(data); // this will print in terminal
    res.redirect("/profile");
});
app.post("/login",async function(req,res){
    let {email,password} =req.body;
    let user =await userModel.findOne({email});
    if(!user) return res.status(500).send("Something went wrong");

    bcrypt.compare(password,user.password,function(err,result){
        if(result)  {
            let token = jwt.sign({email:email,userid:user._id},"shh");
            res.cookie("token",token)
            res.status(200).redirect("/profile");}
        else{
            res.send("Your password is incorrect");
        }
        
    })
    
})
app.get("/logout",function(req,res){
    res.cookie("token","");
    res.redirect("/login")
});
function isLoggedIn(req,res,next){
    if(req.cookies.token === "") return res.redirect("/login");
    else{
      let data = jwt.verify(req.cookies.token,"shh") ;
      req.user = data
       next();
    }
   
}
app.listen(3000)

