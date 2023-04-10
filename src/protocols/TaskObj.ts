import { tasks } from "../schemas";
import * as z from "zod";

type TaskObj = z.infer<typeof tasks> & { isDone?: boolean; id?: number };

export default TaskObj;
