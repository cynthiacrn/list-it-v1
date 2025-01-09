"use client"

import Avatar, { genConfig } from "react-nice-avatar";
import Link from "next/link";

export default function ListsHeader({ user, listItemCount, publicListCount, privateListCount }) {
  return (
    <div className="w-screen flex flex-col items-center gap-4">
      <Avatar className="h-[150px] w-[150px]" {...genConfig(user.email) } />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-semibold">{user.firstName} {user.lastName}</h1>
        {!listItemCount ? (
          <Link href="/wishlists/new" className="cursor-pointer text-xs bg-mauve border border-black hover:bg-black hover:text-snow font-semibold uppercase py-3 px-4 w-full transition duration-300 ease-in-out">
            Create your first wishlist
          </Link>
        ) : (
          <div className="flex flex-row gap-2 text-sm">
            <div>{publicListCount} public {publicListCount > 1 ? ('lists') : ('list')}</div>
            <span>-</span>
            <div>{privateListCount} private {privateListCount > 1 ? ('lists') : ('list')}</div>
            <span>-</span>
            <div>{listItemCount} {listItemCount > 1 ? ('wishes') : ('wish')}</div>
          </div>
        )}
      </div>
      <div className="flex flex-row gap-4">
        <Link href="/wishlists/new" className="cursor-pointer text-sm bg-black rounded-full hover:bg-atomic-tangerine text-snow hover:text-black py-1.5 px-3 w-full transition duration-300 ease-in-out whitespace-nowrap">
          Create list
        </Link>
        <Link href="/profile" className="cursor-pointer text-sm border border-black rounded-full hover:border-atomic-tangerine hover:text-atomic-tangerine py-1.5 px-3 w-full transition duration-300 ease-in-out whitespace-nowrap">
          Update profile
        </Link>
      </div>
    </div>

  )
}
