import { Roommate } from "@prisma/client";
import prisma from "../config/database";

const create = async (data: Omit<Roommate, "id">) => {
  const res = await prisma.roommate.create({ data });
  return res;
};

const findByEmail = async (email: string) => {
  const res = await prisma.roommate.findUnique({
    where: {
      email,
    },
  });
  return res;
};

const getById = async (id: number) => {
  const res = await prisma.roommate.findUnique({ where: { id } });
  return res;
};

export default { create, findByEmail, getById };
