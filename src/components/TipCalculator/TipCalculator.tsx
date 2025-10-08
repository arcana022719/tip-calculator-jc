import React from 'react'
import TipButton from './TipButton'
import TipInputSection from './TipInputSection'

export default function TipCalculator() {
  return (
    <div>
      <div>
      <TipInputSection
        bill=""
        setBill={() => {}}
        selectedTip={null}
        setSelectedTip={() => {}}
        customTip=""
        setCustomTip={() => {}}
        people=""
        setPeople={() => {}}
      />
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Tip Calculator</h2>
      <TipButton value={15} active={false} onClick={() => {}} />
      <TipButton value={20} active={false} onClick={() => {}} />
      <TipButton value={25} active={false} onClick={() => {}} />
      <p className="text-center text-gray-600">Tip Calculator Component</p>
      </div>
    </div>
    
  )
}