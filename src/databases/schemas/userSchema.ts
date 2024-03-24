import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    email: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
        type: String,
      trim: true,
      required: true,
    },

  });
  