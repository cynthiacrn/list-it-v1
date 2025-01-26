"use server"

import { auth } from '@/lib/auth'

export async function deleteListItem({ listSlug, itemSlug }) {
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

  return prisma.listItem.delete({
    where: { id: listItem.id },
  })
}
