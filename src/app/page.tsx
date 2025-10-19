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
  gap: '48px'
}}>
  <TipCalculator />
</div>
)
}