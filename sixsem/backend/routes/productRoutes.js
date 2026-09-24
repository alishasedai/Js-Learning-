const express = require("express");
const productRoutes = express.Router();
const validation = require("../middleware/validation");
// const errorHandler = require("../middleware/errorMiddleware")

const {getProduct,createProduct, oneProduct,updateProduct,deleteProduct,updatePartial} = require("../controllers/productController");
productRoutes.get("/",getProduct);
productRoutes.post("/createProduct",createProduct);
productRoutes.get("/oneProduct/:name",oneProduct);
productRoutes.post("/updateProduct/:id",updateProduct);
productRoutes.post("/deleteProduct/:id",deleteProduct);
productRoutes.patch("/updatePartial/:id",updatePartial)


module.exports = productRoutes;
