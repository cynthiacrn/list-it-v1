import ListItemForm from '@/components/forms/ListItemForm'
import FormLayout from '@/components/forms/shared/FormLayout'
import { updateListItem } from '@/actions/listItems/updateListItem'
import { redirect } from 'next/navigation'
import { prisma } from "@/lib/prisma";

export default async function EditWishlistItemPage({ params }) {
  const { listSlug, itemSlug } = await params

  const item = await prisma.listItem.findUnique({
    where: { slug: itemSlug },
  })

  const handleUpdateListItem = async (formValues) => {
    "use server"
    const listItem = await updateListItem({ ...formValues, listSlug, itemSlug })
    redirect(`/wishlists/${listSlug}/items/${listItem.slug}`)
  }

  return (
    <FormLayout title="Add Wish">
      <ListItemForm defaultValues={item} onSubmit={handleUpdateListItem} />
    </FormLayout>
  )
}
