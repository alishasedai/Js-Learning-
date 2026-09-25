const express = require("express");
const productRoutes = express.Router();
const validation = require("../middleware/validation");
// const errorHandler = require("../middleware/errorMiddleware")
const authMiddleware = require("../middleware/authMiddleware")
const {getProduct,createProduct, oneProduct,updateProduct,deleteProduct,updatePartial} = require("../controllers/productController");
const {auths} = require("../middleware/p")
const { testWho } = require("../controllers/practiceController");
productRoutes.get("/",authMiddleware,getProduct);
productRoutes.post("/createProduct",authMiddleware,createProduct);
productRoutes.get("/oneProduct/:name",authMiddleware,oneProduct);
productRoutes.post("/updateProduct/:id",updateProduct);
productRoutes.post("/deleteProduct/:id",authMiddleware,deleteProduct);


productRoutes.post("/d/:id",auths,testWho)


productRoutes.patch("/updatePartial/:id",updatePartial)


module.exports = productRoutes;
