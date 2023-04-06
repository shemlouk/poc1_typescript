import { NextFunction, Request, Response } from "express";
import RoommateServices from "services/RoommateServices";

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await RoommateServices.create(req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};

export default { create };
