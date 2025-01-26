"use client"

import Avatar, { genConfig } from "react-nice-avatar";
import Link from "next/link";

export default function ListsHeader({ user, listItemCount, publicListCount, privateListCount }) {
  return (
    <div className="w-screen flex flex-col items-center gap-4">
      <Avatar className="h-[150px] w-[150px]" {...genConfig(user.email) } />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-semibold">{user.firstName} {user.lastName}</h1>
        <div className="flex flex-row gap-2 text-sm">
          <div>{publicListCount} public {publicListCount > 1 ? ('lists') : ('list')}</div>
          <span>-</span>
          <div>{privateListCount} private {privateListCount > 1 ? ('lists') : ('list')}</div>
          <span>-</span>
          <div>{listItemCount} {listItemCount > 1 ? ('wishes') : ('wish')}</div>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <Link href="/wishlists/new" className="button button-filled">
          Create list
        </Link>
        <Link href="/profile" className="button button-outlined">
          Update profile
        </Link>
      </div>
    </div>

  )
}
