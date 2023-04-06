import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";

const validateSchema = (schema: ZodObject<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      error.statusCode = 422;
      next(error);
    }
  };
};

export default validateSchema;
