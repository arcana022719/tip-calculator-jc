import React from 'react'

interface TipButtonProps {
  value: number
  active: boolean
  onClick: () => void
}

export default function TipButton({ value, active, onClick }: TipButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-300 ${
        active ? 'bg-cyan-600 text-white' : 'bg-gray-100 text-gray-800'
      }`}
    >
      {value}%
    </button>
  )
}
