const e = require("express");
const express = require("express");

const app = express();
app.use(express.json());

const users = [];
app.get("/",(req,res) => {
    res.json({
        message : "My first backend API"
    })
})
app.get("/about",(req,res) => {
    res.json({
        message : "This is my backend"
    })
})
app.get("/register",(req,res) => {
    res.json(users)
})
app.post("/register",(req,res) => {
    console.log("req.body :",req.body);
    const user = req.body;
    users.push(user)
    res.json({
        message : "Registration is successfull",
        user : user
    })

})
app.get("/user/:id",(req,res) => {
    console.log("Request :",req.params.id);
    const id = Number(req.params.id);
    const user = users.find((u) => (id === u.id))
    console.log("user is found with this id:",user)
    res.json({
        message : "Founded",
        user : user
    })
})
app.get("/nameFind/:name",(req,res) => {
   
    console.log("1. URL name:", req.params.name);
    
    const name = req.params.name;
    const findedUsers = users.find((u) => name === u.name);
     console.log("Searching for:", name);
     console.log("Found user:", findedUsers);
    res.json({
        message : "Finded",
        user : findedUsers
    })
})

app.get("/search",(req,res) => {
    console.log("req.query.name :",req.query);
    res.json({
        message : "I am finding"
    })
})
app.get("/getUsers",(req,res) => {
    console.log("req.query.name : ", req.query.name);
    const name = req.query.name;
    const findsName = users.find((u) => u.name === name);
    console.log("FindedName :",findsName);
    res.json({
        message : "I get the name",
        user : findsName
    })
})

app.post("/addUser",(req,res) => {
    const added = req.body;
    users.push(added);
    res.json({
        message : "Added Users" ,
        added : added
    })
})
app.get("/getEmail",(req,res) => {
    const emails = req.query.email;
    console.log("Email from the URL : ",emails);
    const finds = users.find((u) => u.email === emails);
    
    res.json({
        message : "Email received",
        emailFind : finds
    })
})
app.put("/update/:Id",(req,res) => {
    console.log("Update id will be : ",req.params.Id);
    console.log("Request body : ",req.body);
    const updateId = users.find((u) => Number(req.params.Id) === u.Id);
    updateId.name = req.body.name;
    updateId.email = req.body.email;
    console.log("Upadted Id data is : ",updateId);
    res.json({
        message : "Hello updated is done from this point"
    })
})

app.delete("/deleteUser/:id",(req,res) => {
    const deleteUser = Number(req.params.id);
    console.log("Delete user : ",deleteUser);
    const index = users.findIndex((u) => u.id === deleteUser);
    if(index === -1){
        return res.status(404).json({
            message : "User not found"
        })
    }
    console.log("index :",index);
    const updateUsers = users.splice(index,1);
    res.json({
        message : "User deleted successfully",
        user :updateUsers
    })
})

app.patch("/updateUserEmail/:id",(req,res) => {
    console.log("Updated Id : ",req.params.id)
    console.log("Request body : ",req.body);
    const updateEmail = users.find((u) => u.id === Number(req.params.id));
    updateEmail.email = req.body.email
    
    res.json({
        message : "Update successfully"
    })
})

// app.use((req,res,next) => {
//     console.log("Request Method : ",req.method);
//     console.log("Request URL : ",req.url)
//     if(req.method != "GET"){
//       return  res.status(404).json({
//             message : "This is not the get method haha.."
//         })
//     }
//    next();
// })
app.get("/usersMiddleware",(req,res) => {
    res.json({
        message : "usersMiddle Ware..."
    })
})
app.get("/getHeaderName",(req,res) => {
    console.log("Header Name : ",req.headers.name);
    res.json({
        message : "Name is recieved",
        data : req.headers.name
    })
})

const middleware =(req, res, next) => {
    console.log("Middleware running");

    console.log("headers", req.headers);

//   if (req.headers.name === "Alisha") {
//     console.log("Hello i'm alishaaaa");
//     next();
//   }
//   else{
//     return res.status(401).json({
//         message : "Header is not send.."
//     })
//     next()
// }
next()
};
app.get("/protected",middleware,(req,res) => {
    return res.json({
        message : "Protected route this is now using the middleware."
    })
})
const checkHeader = (req,res,next) => {
    console.log("req.headers.method ",req.method)
    if(req.method === "POST"){
       next()
    }
    else {
      return  res.status(401).json({
            message : "this is not the post method hahhaha"
        })
    }
    
}
app.get("/getHeaders",checkHeader,(req,res) => {
    res.json({
        message : "This is the post route."
    })
})

const firstMiddleware = (req,res,next) => {
    console.log("First middleware");
    next();
    
}

const secondMiddleware = (req, res, next) => {
    console.log("Second middleware");
    next();
    
};
app.get("/routes",firstMiddleware,secondMiddleware,(req,res) => {
    res.json({
        message : "Route reached.."
    })
})


const dataMiddleware = (req,res,next) => {
    req.user = {
        name : "Alisha",
        email : "alishasedai@gmail.com"
    }
    next();
}
app.get("/dataMi",dataMiddleware,(req,res) => {
    res.json({
        users : req.user
    })
})

const checkRole = (req,res,next) => {
    if(req.headers.role === "Student"){
        next();
    }
    else{
        return res.status(403).json({
            message : "The role is not student"
        })
    }
    
}
app.post("/students", checkRole, (req, res) => {
  res.json({
    message: "The role is student..",
  });
});
const loggerMiddleware = (req,res,next) => {
    const users = req.headers;
    console.log("USERS : ",users)
    next();
}


const roleMiddleware = (req, res, next) => {
    if(req.headers.role === "Student"){
        next();
    }
    else{
        return res.status(403).json({
            message : "The role didnt match"
        })
    }
};
app.post("/checkLogin",loggerMiddleware,roleMiddleware,(req,res) => {
    res.json({
        message : "Login and role matched"
    })
})

const checkDate = (req,res,next) => {
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    console.log("minutes : ",minutes);
    console.log("Seconds : ",new Date().getSeconds());
    
    
    console.log(hour);

    if(hour < 12){
        next();
    }
    else{
        res.status(403).json({
            message : "It is not good morning"
        })
    }
}
app.get("/morning",checkDate,(req,res) => {
    res.json({
        message : "Access allowed only before 12 "
    })
})


const checkNumber = (req, res, next) => {
    console.log("req.params.id : ", typeof(req.params.id));
    
  const id = Number(req.params.id);
  console.log("typeof(id) : ",typeof(id))
  if (!isNaN(id)) {
    next();
  } else {
    return res.status(400).json({
      message: "It is not the correct id ...",
    });
  }
};
app.post("/checkId/:id",checkNumber,(req,res) => {
    res.json({
        message : "It is the correct data that can be converted to text"
    })
})

const checkToken = (req,res,next) => {
    if(req.headers.token === "abc123" ){
        next();
    }
    else{
        return res.status(401).json({
            message : "Unauthorized"
        })
    }
}
app.get("/checkTokens",checkToken,(req,res) => {
    res.json({
        message : "Token verified .."
    })
})


//making the method which has the profile login 

const checkLogin = (req,res,next) => {
    if(req.headers.token === "abc1234"){
        next();

    }
    else{
        return res.status(400).json({
            message : "Invalid login"
        })
    }
}
const checkProfile = (req,res,next) => {
    if(req.headers.name === "Alisha"){
        next();
    }
    else{
        return res.status(400).json({
            message : "You are not that whom i am searching for.."
        })
    }
}
// app.get("/logins",checkLogin,(req,res) => {
//     res.json({
//         message : "Token is valid.."
//     })
// })
// app.post("/profile",checkProfile,(req,res) => {
//     res.json({
//         message : "Welcome "+ req.headers.name
//     })
// })
const checkRoless = (req,res,next) => {
    if(req.headers.role === "Student"){
        next();
    }
    else{
        return res.status(403).json({
            message : "Your role is not valid"
        })
    }
}
app.post("/adminProfile",checkLogin,checkProfile,checkRoless,(req,res) => {
    res.json({
        message : "It is valid and welcome ,"+req.headers.name
    })
})
// app.post("/role",checkRoless,(req,res) => {
//     res.json({
//         message : "You are student and welcome"
//     })
// })
const normalM = (req,res,next) => {
    if(req.headers.name === "Alisha"){
        next();
    }
    else{
        const error = new Error("Name not found");
        error.status = 403;
        next(error)
    }

}
const errorHandler = (error, req, res, next) => {
  res.status(error.status || 400).json({
    success: false,
    message: error.message,
  });
};
app.post("/userData",normalM
    ,(req,res) => {
    res.json({
        success : true,
        message : "Name is provided ..."
    })
})
app.use(errorHandler)
app.listen(4000,() => {
    console.log("Server is running at port 4000");
  
})



