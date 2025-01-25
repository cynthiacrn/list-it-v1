'use client';

import { useRouter } from "next/navigation";
import { deleteListItem } from "@/actions/listItems/deleteListItem";

export default function DeleteListItemButton({ itemSlug, listSlug }) {
  const router = useRouter();

  const handleDeleteListItem = async () => {
    await deleteListItem({ itemSlug, listSlug })
    router.push(`/wishlists/${listSlug}`);
  }

  return (
    <button
      onClick={handleDeleteListItem}
      className="h-[42px] flex items-center justify-center border border-black rounded-full p-2 w-[42px] hover:border-atomic-tangerine hover:text-atomic-tangerine transition duration-300 ease-in-out"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M3 6h18" />
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        <line x1="10" x2="10" y1="11" y2="17" />
        <line x1="14" x2="14" y1="11" y2="17" />
      </svg>
    </button>
  );
}
