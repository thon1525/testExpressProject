import mongoose from "mongoose";
import { MovieSchema } from "../schemas/MovieSchema";
export const movieModel = mongoose.model('Movie', MovieSchema)