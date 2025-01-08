import React from 'react'

export default function TextField({ type, ...props }) {
  if (type === 'textarea') {
    return <textarea {...props} className="block min-w-0 w-full grow py-1.5 pl-1 pr-3 text-sm bg-snow text-black placeholder:text-black focus:outline focus:outline-1 focus:outline-mauve sm:text-sm/6" />;
  }

  return <input type={type} {...props} className="block min-w-0 w-full grow py-1.5 pl-1 pr-3 text-sm bg-snow text-black placeholder:text-black focus:outline focus:outline-1 focus:outline-mauve sm:text-sm/6" />
}
