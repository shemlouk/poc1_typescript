import prisma from "../config/database";
import TaskObj from "protocols/TaskObj";
import { Task } from "@prisma/client";

const create = async (data: TaskObj): Promise<Task> => {
  const res = await prisma.task.create({ data });
  return res;
};

const updateById = async (
  id: number,
  data: Partial<TaskObj>
): Promise<Task> => {
  const res = await prisma.task.update({
    where: { id },
    data,
  });
  return res;
};

const deleteById = async (id: number): Promise<Task> => {
  const res = await prisma.task.delete({ where: { id } });
  return res;
};

const getById = async (id: number): Promise<Task | null> => {
  const res = await prisma.task.findUnique({ where: { id } });
  return res;
};

const getByRoommateId = async (roommateId: number): Promise<Task[]> => {
  const res = await prisma.task.findMany({ where: { roommateId } });
  return res;
};

const getAll = async (): Promise<Task[]> => {
  const res = await prisma.task.findMany();
  return res;
};

export default {
  create,
  updateById,
  deleteById,
  getAll,
  getById,
  getByRoommateId,
};
