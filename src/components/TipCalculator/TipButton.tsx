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
      style={{
        padding: '8px',
        border: '1px solid black',
        backgroundColor: active ? 'black' : 'white',
        color: active ? 'white' : 'black',
        cursor: 'pointer'
      }}
    >
      {value}%
    </button>
  )
}
