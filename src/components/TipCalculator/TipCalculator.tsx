'use client'
import React, { useState } from 'react'
import TipButton from './TipButton'

export default function TipCalculator() {
  const [bill, setBill] = useState('')
  const [selectedTip, setSelectedTip] = useState<number | null>(null)
  const [customTip, setCustomTip] = useState('')
  const [people, setPeople] = useState('')

  const tipOptions = [5, 10, 15, 25, 50]
  
  const billAmount = parseFloat(bill) || 0
  const tipPercent = selectedTip || parseFloat(customTip) || 0
  const numPeople = parseInt(people) || 1
  
  const tipAmount = (billAmount * tipPercent / 100) / numPeople
  const totalAmount = (billAmount + (billAmount * tipPercent / 100)) / numPeople

  const handleReset = () => {
    setBill('')
    setSelectedTip(null)
    setCustomTip('')
    setPeople('')
  }

  const showPeopleError = people !== '' && parseInt(people) <= 0

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', border: '1px solid black', padding: '20px' }}>
      {/* Left Section - Input Section */}
      <div>
        <label style={{ display: 'block', marginBottom: '5px' }}>Bill</label>
        <input
          type="number"
          min="0"
          step="0.01"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          placeholder="0"
          style={{ width: '100%', padding: '8px', border: '1px solid black', marginBottom: '20px' }}
        />

        <label style={{ display: 'block', marginBottom: '10px' }}>Select Tip %</label>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '10px' }}>
          {tipOptions.map((t) => (
            <TipButton
              key={t}
              value={t}
              active={selectedTip === t}
              onClick={() => {
                setSelectedTip(t)
                setCustomTip('')
              }}
            />
          ))}
          <input
            type="number"
            min="0"
            placeholder="Custom"
            value={customTip}
            onChange={(e) => {
              setCustomTip(e.target.value)
              setSelectedTip(null)
            }}
            style={{ padding: '8px', border: '1px solid black' }}
          />
        </div>

        <label style={{ display: 'block', marginBottom: '5px' }}>Number of People</label>
        <input
          type="number"
          min="0"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          placeholder="0"
          style={{ 
            width: '100%', 
            padding: '8px', 
            border: showPeopleError ? '1px solid red' : '1px solid black'
          }}
        />
        {showPeopleError && <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>Can't be zero</p>}
      </div>

      {/* Right Section - Results Section */}
      <div style={{ border: '1px solid black', padding: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div>
              <div>Tip Amount</div>
              <div style={{ fontSize: '12px' }}>/ person</div>
            </div>
            <div style={{ fontSize: '24px' }}>
              ${tipAmount.toFixed(2)}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div>
              <div>Total</div>
              <div style={{ fontSize: '12px' }}>/ person</div>
            </div>
            <div style={{ fontSize: '24px' }}>
              ${totalAmount.toFixed(2)}
            </div>
          </div>
        </div>

        <button 
          onClick={handleReset}
          style={{ 
            width: '100%', 
            padding: '10px', 
            border: '1px solid black',
            cursor: 'pointer',
            marginTop: '40px'
          }}
        >
          RESET
        </button>
      </div>
    </div>
  )
}