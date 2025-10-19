'use client'
import React from 'react'
import TipCalculator from '../components/TipCalculator/TipCalculator'


export default function Home() {
return (
<div style={{ 
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  gap: '88px',
  backgroundColor: 'hsl(185, 41%, 84%)'
}}>
  <img 
    src="/images/logo.svg" 
    alt="SPLITTER" 
    width={87} 
    height={54}
    style={{ display: 'block' }}
  />
  <TipCalculator />
</div>
)
}