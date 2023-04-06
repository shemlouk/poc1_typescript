import * as z from "zod";

export const roommate = z.object({
  email: z.string().email(),
  name: z.string(),
});

export const tasks = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date().min(new Date()),
  roommateId: z.number().int().positive(),
});
