import FormLayout from '@/components/forms/shared/FormLayout'
import { redirect } from 'next/navigation'
import { prisma } from "@/lib/prisma";
import {updateList} from "@/actions/lists/updateList";
import ListForm from "@/components/forms/ListForm";

export default async function EditWishlistItemPage({ params }) {
  const { listSlug } = await params

  const list = await prisma.list.findUnique({
    where: { slug: listSlug },
  })

  const handleUpdateList = async (formValues) => {
    "use server"
    const list = await updateList({ ...formValues, slug: listSlug })
    redirect(`/wishlists/${list.slug}`)
  }

  return (
    <FormLayout title="Edit List">
      <ListForm defaultValues={list} onSubmit={handleUpdateList} buttonAction="Update" />
    </FormLayout>
  )
}
