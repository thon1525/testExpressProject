import { Request, Response, NextFunction } from "express";
import { userModel } from "../databases/models/userModel";
import UserService from "../services/userService";
import { BaseCustomError } from "../middleware/BaseCustomError";
import { StatusCode } from "../StatusCode/StatusCode";
export const userRouteController = {
  getUser: async function (req: Request, res: Response) {
    const product = await userModel.find({});
    res.json({
      status: "success",
      message: "Movies list found!!!",
      data: product,
    });
  },
  getAll: async function (req: Request, res: Response) {
    const movies = await userModel.find({});

    res.json({
      status: "success",
      message: "Movies list found!!!",
      data: movies,
    });
  },

  create: async function (req: Request, res: Response, _next: NextFunction) {
    try {
      const userService = new UserService();
      const Requestdata = req.body;
      const { newUser, token } = await userService.signUp(Requestdata);
      res.status(201).json({ newUser, token });
    } catch (err) {
      if (err instanceof Error) {
        const customError = new BaseCustomError(
          err.message,
          StatusCode.InternalServerError
        );
        _next(customError);
      }
    }
  },
};
