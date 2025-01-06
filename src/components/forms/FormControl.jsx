import React, { cloneElement, isValidElement, useMemo } from 'react'

export default function FormControl({ label, tooltip, required, error, children }) {
  const Component = useMemo(() => {
    return isValidElement(children)
      ? cloneElement(children, { required })
      : children
  }, [])

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label>{label} {!required && "(optional)"}</label>}
      {Component}
      {tooltip && <p className="text-xs">{tooltip}</p>}
      {error && <label className="text-atomic-tangerine text-xs">{error}</label>}
    </div>
  )
}
