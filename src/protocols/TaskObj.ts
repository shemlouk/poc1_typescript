import { tasks } from "../schemas";
import * as z from "zod";

type TaskObj = z.infer<typeof tasks>;

export default TaskObj;
