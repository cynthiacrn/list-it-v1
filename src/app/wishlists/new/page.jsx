import CreateListForm from "@/components/CreateListForm";
import { createList } from "@/actions/createList";

export default async function NewWishlistPage() {
  return (
    <div>
      <h1>Create New Wishlist</h1>
      <CreateListForm onSubmit={createList} />
    </div>
  );
}
