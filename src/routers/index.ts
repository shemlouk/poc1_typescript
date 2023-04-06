import roommateRouter from "./RoommatesRouter";
import tasksRouter from "./TasksRouter";
import { Router } from "express";

const router = Router();

router.use("/roommates", roommateRouter);
router.use("/tasks", tasksRouter);

export default router;
