import CreateListItemForm from "@/components/CreateListItemForm";
import { createListItem } from "@/actions/lists/createListItem";

export default async function NewWishlistItemPage({ params }) {
  const { slug } = await params

  return (
    <div>
      <h1>Create New Wishlist Item</h1>
      <CreateListItemForm listSlug={slug} onSubmit={createListItem} />
    </div>
  );
}
