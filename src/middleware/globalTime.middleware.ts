import { NextFunction,Request, Response } from "express";

  const globalTime= (req: Request, res: Response, _next: NextFunction) => {
    const requestTime = new Date();
    console.log(`[${requestTime.toLocaleString()}] ${req.method} ${req.originalUrl}`);
    _next();
  }

  export {globalTime}