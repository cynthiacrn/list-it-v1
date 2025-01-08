import { object, string, boolean } from "zod"

export const createListSchema = object({
  name: string().min(1, 'Name is required').max(100, 'Name is too long'),
  description: string().optional(),
  isPrivate: boolean(),
})
