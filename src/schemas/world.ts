import { WORLD_NAME_ERROR } from "@/constants";
import { z } from "zod";
const maxWorldNameLength =
  Number(import.meta.env.VITE_MAX_WORLD_NAME_LENGTH) || 32;
export const worldNameSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, WORLD_NAME_ERROR.empty)
    .max(maxWorldNameLength, WORLD_NAME_ERROR.too_long),
});
