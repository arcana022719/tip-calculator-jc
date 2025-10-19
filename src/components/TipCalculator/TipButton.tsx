import React from 'react'

interface TipButtonProps {
  value: number
  active: boolean
  onClick: () => void
}

export default function TipButton({ value, active, onClick }: TipButtonProps) {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: '10px',
        border: 'none',
        backgroundColor: active 
          ? 'hsl(172, 67%, 45%)' 
          : isHovered 
            ? 'hsl(172, 67%, 55%)'
            : 'hsl(183, 100%, 15%)',
        color: active 
          ? 'hsl(183, 100%, 15%)' 
          : isHovered 
            ? 'hsl(183, 100%, 15%)'
            : 'hsl(0, 100%, 100%)',
        cursor: 'pointer',
        borderRadius: '5px',
        fontSize: '24px',
        fontFamily: 'Space Mono, monospace',
        fontWeight: '700',
        transition: 'all 0.3s ease'
      }}
    >
      {value}%
    </button>
  )
}
