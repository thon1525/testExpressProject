import express from "express";
import { movieController } from "../controller/movie.controller";
import { ValidateMongoose } from "../middleware/Mongoose";
import { constomError } from "../middleware/Validation/constomError";
import { MovieValidation } from "../schemas/MovieValidation";

export const movieRouter = express.Router();

movieRouter.get("/", movieController.getAll);
movieRouter.post(
  "/",
  constomError(MovieValidation),
  movieController.create
);
// search data in post
movieRouter.get("/search", movieController.searchmovie);
movieRouter.get("/:movieId", ValidateMongoose, movieController.getById);
movieRouter.put("/:movieId", movieController.updateById);
movieRouter.delete("/:movieId", movieController.deleteById);
