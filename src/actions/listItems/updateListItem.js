"use server"

import { auth } from "@/lib/auth"
import slugify from "slugify";

export async function updateListItem({ listSlug, itemSlug, url, name, description, price }) {
  const session = await auth()

  if (!session || !session.user) {
    throw new Error("User not authenticated")
  }

  const list = await prisma.list.findUnique({
    where: { slug: listSlug, userId: session.user.id },
  })

  if (!list) {
    throw new Error("List not found")
  }

  const listItem = await prisma.listItem.findUnique({
    where: { slug: itemSlug, listId: list.id },
  })

  if (!listItem) {
    throw new Error("List item not found")
  }

  return prisma.listItem.update({
    where: { id: listItem.id },
    data: {
      slug: slugify(name || listItem.name, { lower: true, strict: true }),
      url,
      name,
      description,
      price,
    },
  })
}
