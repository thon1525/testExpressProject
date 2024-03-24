/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextFunction, Request, Response } from "express";
import { BaseCustomError } from "./BaseCustomError";

function globalError(
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
) {

  if (err instanceof BaseCustomError) {
    res.status(err.statusCode).json({
      statusCode: err.statusCode,
      message: err.message,
    });
  }
  _next();
}

export { globalError };
