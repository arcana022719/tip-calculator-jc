import React from 'react'
import TipButton from './TipButton'

interface TipInputProps {
  bill: string
  setBill: (v: string) => void
  selectedTip: number | null
  setSelectedTip: (v: number | null) => void
  customTip: string
  setCustomTip: (v: string) => void
  people: string
  setPeople: (v: string) => void
}

export default function TipInputSection({
  bill, setBill,
  selectedTip, setSelectedTip,
  customTip, setCustomTip,
  people, setPeople,
}: TipInputProps) {
  const tipOptions = [5, 10, 15, 25, 50]
  const showPeopleError = people !== '' && parseInt(people) <= 0

  return (
    <section className="bg-white rounded-2xl p-6 shadow">
      <label className="block mb-2 text-sm font-medium">Bill</label>
      <input
        type="number"
        min="0"
        step="0.01"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
        className="w-full p-3 border rounded-md mb-4"
      />

      <label className="block mb-2 text-sm font-medium">Select Tip %</label>
      <div className="grid grid-cols-3 gap-3 mb-3">
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
          className="rounded-md p-2 border col-span-3"
        />
      </div>
      <label className="block mb-2 text-sm font-medium">Number of People</label>
      <input
        type="number"
        min="0"
        value={people}
        onChange={(e) => setPeople(e.target.value)}
        className={`w-full p-3 border rounded-md ${showPeopleError ? 'border-red-500' : 'border-gray-200'}`}
      />
      {showPeopleError && <p className="text-red-600 text-sm mt-2">Number of people can’t be zero</p>}
    </section>
  )
}
