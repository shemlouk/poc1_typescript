import roommateRouter from "./RoommatesRouter";
import { Router } from "express";

const router = Router();

router.use(`/roommates`, roommateRouter);

export default router;
