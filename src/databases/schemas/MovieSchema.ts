import mongoose from "mongoose";

export const MovieSchema = new mongoose.Schema({

    movieId: {
      type: String,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    released_on: {
      type: Date,
      trim: true,
      required: true,
    },
    DateRecord: {
      type: Date,
      trim: true,
      required: true,
     default: Date.now, 
    },
  });
  