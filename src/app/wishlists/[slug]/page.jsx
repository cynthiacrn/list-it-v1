import { redirect } from 'next/navigation'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'
import ListHeader from '@/components/ListHeader'
import TileGrid from "@/components/TileGrid";

export default async function WishlistPage({ params }) {
  const session = await auth()
  const { slug } = await params

  const wishlist = await prisma.list.findUnique({
    where: { slug, userId: session.user.id },
    include: { listItems: true, addresses: true },
  })

  if (!wishlist) {
    redirect('/wishlists')
  }

  return (
    <div className="flex flex-col gap-12 pt-12">
      <ListHeader user={session.user} wishlist={wishlist} />
      {wishlist.description && (
        <div className="px-24">{wishlist.description}</div>
      )}
      <div className="flex flex-col gap-4 px-24">
        <div className="flex flex-row gap-1 items-center">
          {wishlist.visibility === "PUBLIC" ? (
            <div className="flex flex-row gap-1 justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                   stroke="currentColor" className="size-5">
                <path classnamee-linecap="round" strokeLinejoin="round"
                      d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/>
              </svg>
              <p className="font-medium">Public list</p>
            </div>
          ) : (
            <div className="flex flex-row gap-1 justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                   stroke="currentColor" className="size-5">
                <path classnamee-linecap="round" strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/>
              </svg>
              <p className="font-medium">Private list</p>
            </div>
          )}
          <span className="font-medium">-</span>
          <div className="font-medium">{wishlist.listItems.length} {wishlist.listItems.length > 1 ? ('wishes') : ('wish')}</div>
        </div>

        <TileGrid wishlistSlug={slug} listItems={wishlist.listItems} />
      </div>
      <div className="gap-4 sticky bottom-0 left-0 right-0 flex flex-row justify-center bg-seashell items-center px-24 pt-4 pb-6">
        <Link href={`/wishlists/${slug}/items/new`} className="button button-filled">
          Add a wish
        </Link>
        <Link href="/profile" className="button button-outlined">
          Share list
        </Link>
      </div>
    </div>
  )
}
