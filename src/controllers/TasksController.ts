import { NextFunction, Request, Response } from "express";
import TasksServices from "services/TasksServices";

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await TasksServices.create(req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};

const deleteById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await TasksServices.deleteById(Number(req.params.id));
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await TasksServices.getAll();
    res.send(data);
  } catch (error) {
    next(error);
  }
};

const getByRoommateId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await TasksServices.getByRoommateId(Number(req.params.id));
    res.send(data);
  } catch (error) {
    next(error);
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await TasksServices.update(Number(req.query.id), req.query);
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

export default { create, deleteById, getAll, getByRoommateId, update };
