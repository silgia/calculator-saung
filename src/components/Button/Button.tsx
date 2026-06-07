import React from 'react'

interface ButtonProps {
  label: string
  type?: 'number' | 'operator' | 'function' | 'action'
  onClick: () => void
  className?: string
}

const ButtonComponent: React.FC<ButtonProps> = ({ label, type = 'number', onClick, className = '' }) => {
  const base = 'rounded-md text-lg sm:text-xl py-3 px-4 min-h-[44px] focus:outline-none w-full transition duration-150 ease-in-out select-none'
  let typeClass = 'bg-pink-100 text-gray-800 hover:bg-pink-200 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 active:scale-[0.98] active:shadow-inner'
  if (type === 'operator') typeClass = 'bg-pink-200 text-white hover:bg-pink-300 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 active:scale-[0.98] active:shadow-inner'
  if (type === 'function') typeClass = 'bg-slate-200 text-gray-800 hover:bg-slate-300 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 active:scale-[0.98] active:shadow-inner'
  if (type === 'action') typeClass = 'bg-purple-200 text-white hover:bg-purple-300 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 active:scale-[0.98] active:shadow-inner'

  return (
    <button
      type="button"
      aria-label={label}
      className={`${base} ${typeClass} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export const Button = React.memo(ButtonComponent)
export default Button
