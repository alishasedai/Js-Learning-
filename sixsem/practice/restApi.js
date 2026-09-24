const express = require("express");
const app = express();
app.use(express.json());

const product = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Mouse", price: 20 },
  { id: 3, name: "Keyboard", price: 2000 },
];
const notFind = (req,res,next) => {
    const id  = Number(req.params.id)
    const p = product.find((i) => i.id === id)
         if(p){
            req.product = p
        next();
    }
    
   
    else{
        return res.status(404).json({
            success : false,
            message : "Product from this id is not find"
        })
    }
}
app.get("/products/:id",notFind,(req,res) => {
    const id = Number(req.params.id);
    console.log(id);
    const p = product.find((i) => id === i.id)
    res.json({
        success : true,
        products : p
    })
})

app.delete("/productDelete/:id",(req,res) => {
    const id = Number(req.params.id);
    const deleteIndex = product.findIndex((i) => i.id === id )
    const p = product.splice(deleteIndex,1)
    res.json({
        success : true,
        message : "Product delete successfully",
        products : product
    })
})


app.put("/productUpdate/:id",(req,res) => {
    
    const id = Number(req.params.id);
    console.log("Request paramas id : ",id);
    const p = product.findIndex((u) => u.id === id);
    product[p].name = req.body.name;
    product[p].price = req.body.price
    res.json({
      message: product[p],
    });
})
app.patch("/productModify/:id",(req,res) => {
    const id = Number(req.params.id)
    console.log(id);
    const p = product.find((u) => u.id === id);
    p.price = req.body.price;
    
    res.json({
        success : true,
        message : p
    })
})

const validation = (req,res,next) => {
    console.log("req.body.name : ", req.body.name, "req.body.price : ",req.body.price);
    
    if(req.body.name && req.body.price){
        next();
    }
    else{
        return res.status(400).json({
            message : "Field should not be empty"
        })
    }
}
app.post("/getProduct",validation,(req,res) => {
    console.log(req.body);
    res.json({
        message : "get product",
        items : req.body
    })
    
})
app.post("/userProduct",validation,(req,res) => {
    console.log();
    
    res.json({
        message : "user product is there.."
    })
})

app.listen(4000,() => {
    console.log('server is running at port 4000');
    
})