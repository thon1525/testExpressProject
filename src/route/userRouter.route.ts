import express from "express";
import { userRouteController } from "../controller/userRoute.controller";
import { constomError } from "../middleware/Validation/constomError";
import { userValidation } from "../schemas/userValidation";

export const userRouter = express.Router();

userRouter.get("/", userRouteController.getAll);
userRouter.post(
  "/",
  constomError(userValidation),
  userRouteController.create
);
userRouter.get("/:userId", userRouteController.getUser);
