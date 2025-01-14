"use client"

import Avatar, { genConfig } from "react-nice-avatar";
import Link from "next/link";

export default function WishlistsHeader({ user, wishlists }) {
  const publicCount = wishlists.filter((list) => list.visibility === "PUBLIC").length
  const privateCount = wishlists.filter((list) => list.visibility === "PRIVATE").length

  if (!user) {
    return null
  }

  return (
    <div>
      <Avatar className="h-12 w-12" {...genConfig(user.email) } />
      <h1>{user.firstName} {user.lastName}</h1>
      {wishlists.length === 0 ? (
        <Link href="/wishlists/new" className="cursor-pointer text-xs bg-mauve border border-black hover:bg-black hover:text-snow font-semibold uppercase py-3 px-4 w-full transition duration-300 ease-in-out">
          Create your first wishlist
        </Link>
      ) : (
        <div>
          <div>{publicCount} public lists</div>
          <div>{privateCount} private lists</div>
        </div>
      )}
    </div>

  )
}
