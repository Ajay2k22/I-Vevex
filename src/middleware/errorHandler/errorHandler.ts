import { Request, Response, NextFunction } from "express";
import { DEBUG_MODE } from "../../config";
import CustomErrorHandler from "./customErrorHandler";
const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let data = {
    msg: "Internal Server Error",
    ...(DEBUG_MODE == "true" && { originalError: err.message }),
  };

  if (err instanceof CustomErrorHandler) {
    statusCode = err.status;
    data = {
      msg: err.message,
      ...(DEBUG_MODE == "true" && { originalError: err.message }),
    };
  }

  return res.status(statusCode).json(data);

  return res.status(statusCode).json(data);
};

export default errorHandler;
