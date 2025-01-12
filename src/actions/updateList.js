"use server"

import { auth } from "@/lib/auth"
import slugify from "slugify"

export async function updateList({ slug, name, description, visibility }) {
  const session = await auth()

  if (!session || !session.user) {
    throw new Error("User not authenticated")
  }

  const list = await prisma.list.findUnique({
    where: { slug, userId: session.user.id },
  })

  if (!list) {
    throw new Error("List not found")
  }

  await prisma.list.update({
    where: { id: list.id },
    data: {
      name,
      slug: slugify(name, { lower: true, strict: true }),
      description,
      visibility,
    },
  })
}
