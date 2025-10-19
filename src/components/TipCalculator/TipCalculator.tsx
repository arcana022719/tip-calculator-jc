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
  const hasValues = bill !== '' || people !== '' || selectedTip !== null || customTip !== ''

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: '1fr 1fr', 
      gap: '48px', 
      backgroundColor: 'hsl(0, 100%, 100%)',
      padding: '32px',
      borderRadius: '25px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
      maxWidth: '920px',
      width: '100%'
    }}>
      {/* Left Section - Input Section */}
      <div>
        <label style={{ 
          display: 'block', 
          marginBottom: '8px',
          color: 'hsl(186, 14%, 43%)',
          fontSize: '16px'
        }}>
          Bill
        </label>
        <div style={{ position: 'relative', marginBottom: '32px' }}>
          <span style={{
            position: 'absolute',
            left: '18px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'hsl(184, 14%, 56%)',
            fontSize: '24px'
          }}>$</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            placeholder="0"
            style={{ 
              width: '100%', 
              padding: '6px 18px',
              paddingLeft: '40px',
              border: 'none',
              backgroundColor: 'hsl(189, 47%, 97%)',
              borderRadius: '5px',
              fontSize: '24px',
              color: 'hsl(183, 100%, 15%)',
              textAlign: 'right',
              fontFamily: 'Space Mono, monospace',
              fontWeight: '700',
              outline: 'none'
            }}
          />
        </div>

        <label style={{ 
          display: 'block', 
          marginBottom: '16px',
          color: 'hsl(186, 14%, 43%)',
          fontSize: '16px'
        }}>
          Select Tip %
        </label>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '14px', 
          marginBottom: '32px' 
        }}>
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
            style={{ 
              padding: '6px 18px',
              border: 'none',
              backgroundColor: 'hsl(189, 47%, 97%)',
              borderRadius: '5px',
              fontSize: '24px',
              color: 'hsl(183, 100%, 15%)',
              textAlign: 'right',
              fontFamily: 'Space Mono, monospace',
              fontWeight: '700',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '8px',
            color: 'hsl(186, 14%, 43%)',
            fontSize: '16px'
          }}>
            Number of People
          </label>
          {showPeopleError && (
            <span style={{ 
              color: '#E17457', 
              fontSize: '16px',
              marginBottom: '8px'
            }}>
              Can't be zero
            </span>
          )}
        </div>
        <div style={{ position: 'relative' }}>
          <span style={{
            position: 'absolute',
            left: '18px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'hsl(184, 14%, 56%)',
            fontSize: '24px'
          }}>👤</span>
          <input
            type="number"
            min="0"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            placeholder="0"
            style={{ 
              width: '100%', 
              padding: '6px 18px',
              paddingLeft: '40px',
              border: showPeopleError ? '2px solid #E17457' : 'none',
              backgroundColor: 'hsl(189, 47%, 97%)',
              borderRadius: '5px',
              fontSize: '24px',
              color: 'hsl(183, 100%, 15%)',
              textAlign: 'right',
              fontFamily: 'Space Mono, monospace',
              fontWeight: '700',
              outline: 'none'
            }}
          />
        </div>
      </div>

      {/* Right Section - Results Section */}
      <div style={{ 
        backgroundColor: 'hsl(183, 100%, 15%)',
        padding: '40px',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <div>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '40px' 
          }}>
            <div>
              <div style={{ 
                color: 'hsl(0, 100%, 100%)',
                fontSize: '16px',
                marginBottom: '4px'
              }}>
                Tip Amount
              </div>
              <div style={{ 
                fontSize: '13px',
                color: 'hsl(184, 14%, 56%)'
              }}>
                / person
              </div>
            </div>
            <div style={{ 
              fontSize: '48px',
              color: 'hsl(172, 67%, 45%)',
              fontFamily: 'Space Mono, monospace',
              fontWeight: '700'
            }}>
              ${isNaN(tipAmount) ? '0.00' : tipAmount.toFixed(2)}
            </div>
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '32px' 
          }}>
            <div>
              <div style={{ 
                color: 'hsl(0, 100%, 100%)',
                fontSize: '16px',
                marginBottom: '4px'
              }}>
                Total
              </div>
              <div style={{ 
                fontSize: '13px',
                color: 'hsl(184, 14%, 56%)'
              }}>
                / person
              </div>
            </div>
            <div style={{ 
              fontSize: '48px',
              color: 'hsl(172, 67%, 45%)',
              fontFamily: 'Space Mono, monospace',
              fontWeight: '700'
            }}>
              ${isNaN(totalAmount) ? '0.00' : totalAmount.toFixed(2)}
            </div>
          </div>
        </div>

        <button 
          onClick={handleReset}
          disabled={!hasValues}
          style={{ 
            width: '100%', 
            padding: '10px',
            border: 'none',
            backgroundColor: hasValues ? 'hsl(172, 67%, 45%)' : 'hsl(183, 79%, 24%)',
            color: 'hsl(183, 100%, 15%)',
            borderRadius: '5px',
            fontSize: '20px',
            fontFamily: 'Space Mono, monospace',
            fontWeight: '700',
            cursor: hasValues ? 'pointer' : 'not-allowed',
            textTransform: 'uppercase',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => {
            if (hasValues) {
              e.currentTarget.style.backgroundColor = 'hsl(172, 67%, 55%)'
            }
          }}
          onMouseLeave={(e) => {
            if (hasValues) {
              e.currentTarget.style.backgroundColor = 'hsl(172, 67%, 45%)'
            }
          }}
        >
          RESET
        </button>
      </div>
    </div>
  )
}