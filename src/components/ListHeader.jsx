"use client"

import Avatar, { genConfig } from 'react-nice-avatar'
import Link from 'next/link'

export default function ListHeader({ user, wishlist }) {
  return (
    <div className="w-screen flex flex-col items-center gap-4">
      <Avatar className="h-[150px] w-[150px]" {...genConfig(user.email) } />

      <div className="text-xs">{user.firstName} {user.lastName}</div>

      <div className="text-2xl font-semibold">{wishlist.name}</div>

      <div className="flex flex-row gap-4">
        <Link href="/wishlists/new" className="button button-filled">
          Update list
        </Link>
        <Link href="/profile" className="button button-outlined">
          Share list
        </Link>
        <Link href="/profile" className="cursor-pointer text-sm hover:text-atomic-tangerine py-1.5 w-full transition duration-300 ease-in-out whitespace-nowrap">
          Delete list
        </Link>
      </div>
    </div>

  )
}
