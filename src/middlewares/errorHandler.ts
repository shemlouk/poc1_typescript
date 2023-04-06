import { NextFunction, Request, Response } from "express";
import ErrorObj from "protocols/ErrorObj";

const errorHandler = (
  err: ErrorObj,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, message, statusCode } = err;
  const errorMessage = `${name}: ${message}`;
  console.error(errorMessage);
  res.status(statusCode || 500).json(errorMessage);
};

export default errorHandler;
