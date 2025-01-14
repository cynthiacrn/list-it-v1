import { redirect } from 'next/navigation'
import ListItemForm from '@/components/forms/ListItemForm'
import FormLayout from '@/components/forms/shared/FormLayout'
import { createListItem } from '@/actions/listItems/createListItem'

export default async function NewWishlistItemPage({ params }) {
  const { listSlug } = await params

  const handleCreateListItem = async (formValues) => {
    "use server"
    const listItem = await createListItem({ ...formValues, listSlug })
    redirect(`/wishlists/${listSlug}/items/${listItem.slug}`)
  }

  return (
    <FormLayout title="Add Wish">
      <ListItemForm onSubmit={handleCreateListItem} />
    </FormLayout>
  )
}
