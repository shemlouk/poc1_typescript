import { Roommate } from "@prisma/client";
import prisma from "../config/database";

const create = async (data: Omit<Roommate, "id">): Promise<Roommate> => {
  const res = await prisma.roommate.create({ data });
  return res;
};

const findByEmail = async (email: string): Promise<Roommate> => {
  const res = await prisma.roommate.findUnique({
    where: {
      email,
    },
  });
  return res;
};

export default { create, findByEmail };
