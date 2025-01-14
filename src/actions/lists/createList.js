"use server"

import { auth } from "@/lib/auth"
import slugify from "slugify"

export async function createList({ name, description, visibility }) {
  const session = await auth()

  if (!session || !session.user) {
    throw new Error("User not authenticated")
  }

  return prisma.list.create({
    data: {
      name,
      slug: slugify(name, { lower: true, strict: true }),
      description,
      visibility,
      userId: session.user.id,
    },
  })
}
