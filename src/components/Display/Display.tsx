import React from 'react'

interface DisplayProps {
  value: string
}

export const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <div
      className="bg-gray-50 text-right p-4 rounded text-2xl md:text-3xl overflow-hidden break-words min-h-[4rem]"
      role="status"
      aria-live="polite"
    >
      <div className="truncate">{value}</div>
    </div>
  )
}

export default Display
