"use client";

import { forwardRef } from "react";
import Image from "next/image";

export default forwardRef(({ wish, onDelete }, ref) => (
  <article
    ref={ref}
    className="relative flex flex-col gap-2 cursor-pointer group"
  >
    <div className="relative overflow-hidden rounded-lg">
      <Image
        src={wish.imageUrl}
        priority={true}
        alt="List's cover"
        width={280}
        className="object-cover rounded-lg w-full max-h-[390px] transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

      <button
        onClick={() => onDelete(wish.id)}
        className="absolute top-2 right-2 w-10 h-10 flex justify-center items-center bg-snow text-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-1 border-transparent hover:border-red-700 focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
      </button>
    </div>

    <div className="flex flex-col gap-1">
      {wish.name && <div>{wish.name}</div>}
      {wish.price && (
        <div className="text-sm font-medium">{wish.price}€</div>
      )}
    </div>
  </article>
));
