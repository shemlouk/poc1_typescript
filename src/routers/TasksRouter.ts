import TasksController from "controllers/TasksController";
import validateSchema from "middlewares/validateSchema";
import { Router } from "express";
import { tasks } from "schemas";

const tasksRouter = Router();

tasksRouter
  .get("/", TasksController.getAll)
  .get("/:id", TasksController.getByRoommateId)
  .delete("/:id", TasksController.deleteById)
  .post("/", validateSchema(tasks), TasksController.create)
  .patch("/update", TasksController.update);

export default tasksRouter;
