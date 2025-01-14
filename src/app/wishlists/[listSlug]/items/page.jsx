import { redirect } from 'next/navigation'

export default async function WishlistItemsPage({ params }) {
  const { listSlug } = await params

  redirect(`/wishlists/${listSlug}`)
}
