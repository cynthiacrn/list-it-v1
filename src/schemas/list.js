import { object, string, boolean, number } from "zod"

export const createListSchema = object({
  name: string().min(1, 'Name is required').max(100, 'Name is too long'),
  description: string().optional(),
  isPrivate: boolean(),
})

export const createListItemSchema = object({
  url: string().url(),
  name: string().min(1, 'Name is required').max(100, 'Name is too long'),
  description: string().optional(),
  price: number().optional(),
  image: string().optional(),
})
