
import { movieModel } from "../databases/models/movieModel";
import { BaseCustomError } from "../middleware/BaseCustomError";
import { Request, Response, NextFunction } from "express";

export const movieController = {
  getById: async function (req: Request, res: Response, _next: NextFunction) {
    try {
      const useMovie = await movieModel.findById(req.params.movieId);

      if (!useMovie) {
        console.log("useMovie", useMovie);
        throw new Error("Movie not found");
      }
      res
        .status(200)
        .json({ status: "success", message: "Movie found!!!", data: useMovie });
    } catch (err: unknown) {

      if (err instanceof Error) {
        const customError = new BaseCustomError(err.message, 500);
        _next(customError);
      }
    }
  },

  getAll: async function (req: Request, res: Response) {
    const movies = await movieModel.find({});

    res.json({
      status: "success",
      message: "Movies list found!!!",
      data: movies,
    });
  },

  updateById: async function (req: Request, res: Response) {
    const movie = await movieModel.findByIdAndUpdate(req.params.movieId, {
      name: req.body.name,
    });
    res.json({
      status: "success",
      message: "Movie updated successfully!!!",
      data: movie,
    });
  },
  deleteById: async function (req: Request, res: Response) {
    await movieModel.deleteOne({ _id: req.params.movieId });
    res.json({
      status: "success",
      message: "Movie deleted successfully!!!",
      data: null,
    });
  },

  create: async function (req: Request, res: Response) {
    const m = await new movieModel({
      // movieId: Id,
      name: req.body.name,
      released_on: req.body.released_on
    }).save();
    res.json({
      status: "success",
      message: "Movie added successfully!!!",
      data: m,
    });
  },

  searchmovie: async function (req: Request, res: Response) {
    // const Id = 'v1';
    const item = await movieModel.find({
      name: { $regex: req.body.name, $options: "i" },
    });
    res.json({
      status: "success",
      message: "Movie found successfully!!!",
      data: item,
    });
  },
};
