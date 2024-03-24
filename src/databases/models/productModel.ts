import mongoose from "mongoose";
import { ProductSchema } from "../schemas/ProductSchema";

export const productModel = mongoose.model('products', ProductSchema)