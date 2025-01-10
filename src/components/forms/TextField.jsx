import React from 'react'

export default function TextField({ type, ...props }) {
  const className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mauve focus:border-mauve block w-full p-2.5"

  return type === 'textarea'
      ? <textarea {...props} className={className} />
      : <input type={type} {...props} className={className} />
}
