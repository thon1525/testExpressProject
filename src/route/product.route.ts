import express from "express";
import { productController } from "../controller/product.controller";
import { ValidateMongoose } from "../middleware/Mongoose";

export const productRouter = express.Router();

productRouter.get('/',ValidateMongoose,productController.getProduct)

// create route for insert data          

productRouter.post('/',ValidateMongoose,productController.createProduct)