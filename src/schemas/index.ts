import * as z from "zod";

export const roommate = z.object({
  email: z.string().email(),
  name: z.string(),
});
