import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
    productId: {
      type: String,
    },
    productName: {
      type: String,
      trim: true,
      required: true,
    },
    productPrice: {
      type: Number,
      trim: true,
      required: true,
    },
    productQty: {
      type: Number,
      trim: true,
      required: true,
      
    },
  });