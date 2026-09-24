const Product = require("../models/productModels.js")

// const product = [
//   { id: 1, name: "Laptop", price: 800 },
//   { id: 2, name: "Mouse", price: 20 },
//   { id: 3, name: "Keyboard", price: 2000 },
// ];

const getProduct = async(req, res,next) => {

    const products =await Product.find();
    if(products.length === 0){
        const error  = new Error("Product is empty..");
        error.status= 404;
        return next(error);
    }
  console.log("Hellooooo");

  res.json({
    succes : true,
    product : products
  });
};
const createProduct =async (req,res) => {
    const p = await Product.create({
        name : req.body.name,
        price : req.body.price
    })
    console.log(p);
    
    res.status(201).json({
        succes : true,
        message : "Product added successfully..",
        product : Product
    })
}
const oneProduct = async (req, res) => {
  const name = req.params.name;

  console.log("Name from URL:", name);

  const allProducts = await Product.find();

  console.log("All products:", allProducts);

  const p = await Product.findOne({ name: name });

  console.log("Found product: here from finding only one product...", p);

  res.json({
    success: true,
    product: p,
  });
};
const updateProduct = async(req,res) => {
    const _id = req.params.id
    const p =await Product.findByIdAndUpdate(_id,{
        name : req.body.name,
        price : req.body.price
     },
        {new : true}
    )
   console.log(p);
   
   res.json({
    success : true,
    message : "Product Updated successfully",
    product : p
   })
}
const updatePartial = async(req,res) => {
    const id = req.params.id;
    const p = await Product.findByIdAndUpdate(id,req.body,{new : true});

    res.json({
        success : true,
        message : "Partial updated successfully..",
        product : p
    })
}
const deleteProduct = async(req,res) => {
   const id = req.params.id;
   const p =await Product.findByIdAndDelete(id);
    res.json({
        success : true,
        message : "Product deleted successfully..",
        product : p
    })
}
module.exports = {getProduct,createProduct,oneProduct,updateProduct,deleteProduct,updatePartial};
