import roommateRouter from "./RoommatesRouter";
import { Router } from "express";

const router = Router();

router.use(`/roommate`, roommateRouter);

export default router;
