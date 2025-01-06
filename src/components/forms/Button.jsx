import React from "react"

export default function Button({ ...props }) {
  return <button {...props} className="bg-mauve border border-black hover:bg-black hover:text-snow font-semibold uppercase py-3 px-4 w-full transition duration-300 ease-in-out" />
}
