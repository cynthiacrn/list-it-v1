"use client"

import Avatar, { genConfig } from 'react-nice-avatar'
import Link from 'next/link'

export default function ListHeader({ user, list, onDelete }) {
  return (
    <div className="w-screen flex flex-col items-center gap-4">
      <div className="flex w-full items-start pl-24">
        <Link className="border border-black rounded-full h-[42px] p-2 w-[42px] hover:border-atomic-tangerine hover:text-atomic-tangerine transition duration-300 ease-in-out" href="/wishlists">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        </Link>
      </div>

      <Avatar className="h-[150px] w-[150px]" {...genConfig(user.email) } />

      <div className="text-xs">{user.firstName} {user.lastName}</div>

      <div className="text-2xl font-semibold">{list.name}</div>

      <div className="flex flex-row gap-4">
        <Link href={`/wishlists/${list.slug}/edit`} className="button button-filled">
          Update list
        </Link>
        <Link href="/profile" className="button button-outlined">
          Share list
        </Link>
        <button
          onClick={(event) => {
            event.preventDefault()
            onDelete(list.slug)
          }}
          className="cursor-pointer text-sm hover:text-atomic-tangerine py-1.5 w-full transition duration-300 ease-in-out whitespace-nowrap"
        >
          Delete list
        </button>
      </div>
    </div>
  )
}
