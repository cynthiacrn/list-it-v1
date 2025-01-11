import CreateListItemForm from '@/components/CreateListItemForm'
import FormLayout from '@/components/forms/FormLayout'
import { createListItem } from '@/actions/lists/createListItem'

export default async function NewWishlistItemPage({ params }) {
  const { slug } = await params

  return (
    <FormLayout title="Add Wish" subtitle="Enter the product information you want">
      <CreateListItemForm listSlug={slug} onSubmit={createListItem} />
    </FormLayout>
  )
}
