import RoommateController from "controllers/RoommateController";
import validateSchema from "middlewares/validateSchema";
import { roommate } from "schemas";
import { Router } from "express";

const roommateRouter = Router();

roommateRouter.post("/", validateSchema(roommate), RoommateController.create);

export default roommateRouter;
