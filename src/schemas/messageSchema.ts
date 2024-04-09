import { Content } from "next/font/google";
import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(1, { message: "required" })
    .max(300, { message: "Content must be at least 300 characters long" }),
});
