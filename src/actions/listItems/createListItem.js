"use server"

import { auth } from "@/lib/auth"
import slugify from "slugify";

export async function createListItem({ listSlug, url, name, description, price }) {
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

  return prisma.listItem.create({
    data: {
      listId: list.id,
      slug: slugify(name, { lower: true, strict: true }),
      url,
      name,
      description,
      price,
    },
  })
}
