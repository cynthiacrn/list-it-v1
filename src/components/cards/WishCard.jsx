"use client";

import { forwardRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default forwardRef(({ wish, onDelete }, ref) => {
  const router = useRouter()

  return (
    <Link
      ref={ref}
      href={`/wishlists/${wish.listSlug}/items/${wish.slug}`}
      className="relative flex flex-col gap-2 cursor-pointer group"
    >
      <div className="absolute flex flex-row gap-2 top-2 right-2">
        <button
          onClick={(event) => {
            event.preventDefault()
            router.push(`/wishlists/${wish.listSlug}/items/${wish.slug}/edit`, { scroll: false })
          }}
          className="w-10 h-10 flex justify-center items-center bg-snow text-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-1 border-transparent hover:border-atomic-tangerine focus:outline-none z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
        </button>
        <button
          onClick={(event) => {
            event.preventDefault()
            onDelete(wish.slug)
          }}
          className="w-10 h-10 flex justify-center items-center bg-snow text-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-1 border-transparent hover:border-atomic-tangerine focus:outline-none z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
        </button>
      </div>

      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={wish.imageUrl}
          priority={true}
          alt="List's cover"
          width={280}
          className="object-cover rounded-lg w-full max-h-[390px] transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
      </div>

      <div className="flex flex-col gap-1">
        {wish.name && <div>{wish.name}</div>}
        {wish.price && (
          <div className="text-sm font-medium">{wish.price}€</div>
        )}
      </div>
    </Link>
  )
})
