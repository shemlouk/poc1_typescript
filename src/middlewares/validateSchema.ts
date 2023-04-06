import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";
import errors from "errors";

const validateSchema = (schema: ZodObject<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      const message = error.issues
        .map((m: any) => `${m.path[0]} - ${m.message.toLowerCase()}`)
        .join(", ");
      next(errors.invalidBody(message));
    }
  };
};

export default validateSchema;
