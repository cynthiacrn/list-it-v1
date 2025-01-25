import { redirect } from "next/navigation";
import { createList } from "@/actions/lists/createList";
import ListForm from "@/components/forms/ListForm";
import FormLayout from "@/components/forms/shared/FormLayout";

export default async function NewWishlistPage() {

  const handleCreateList = async (formValues) => {
    "use server"
    const list = await createList(formValues)
    redirect(`/wishlists/${list.slug}`)
  }

  return (
    <FormLayout title="New Wishlist">
      <ListForm onSubmit={handleCreateList} buttonAction="Create"/>
    </FormLayout>
  )
}
