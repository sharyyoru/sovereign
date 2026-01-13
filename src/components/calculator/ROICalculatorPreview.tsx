'use client'

import { useState } from 'react'
import { formatAED, formatPercentage } from '@/lib/utils'

export default function ROICalculatorPreview() {
  const [investment, setInvestment] = useState(2000000)
  const [rentalYield, setRentalYield] = useState(6.5)
  const [appreciation, setAppreciation] = useState(4)

  const annualRental = investment * (rentalYield / 100)
  const fiveYearRental = annualRental * 5
  const fiveYearAppreciation = investment * Math.pow(1 + appreciation / 100, 5) - investment
  const totalReturn = fiveYearRental + fiveYearAppreciation
  const totalROI = (totalReturn / investment) * 100

  return (
    <div className="glass p-8 glow">
      <div className="space-y-8">
        {/* Investment Amount */}
        <div>
          <label className="block text-white/50 text-sm mb-3 uppercase tracking-wider">
            Investment Amount (AED)
          </label>
          <input
            type="range"
            min={500000}
            max={20000000}
            step={100000}
            value={investment}
            onChange={(e) => setInvestment(Number(e.target.value))}
            className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-sovereign-gold"
          />
          <div className="flex justify-between items-center mt-4">
            <span className="text-sovereign-gold font-serif text-3xl">
              {formatAED(investment)}
            </span>
            {investment >= 2000000 && (
              <span className="text-xs text-sovereign-gold glass-gold px-3 py-1.5 uppercase tracking-wider">
                Golden Visa Eligible
              </span>
            )}
          </div>
        </div>

        {/* Rental Yield */}
        <div>
          <label className="block text-white/50 text-sm mb-3 uppercase tracking-wider">
            Expected Rental Yield
          </label>
          <input
            type="range"
            min={3}
            max={10}
            step={0.5}
            value={rentalYield}
            onChange={(e) => setRentalYield(Number(e.target.value))}
            className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-sovereign-gold"
          />
          <p className="text-white text-xl mt-3">
            {formatPercentage(rentalYield)} <span className="text-white/50 text-sm">per annum</span>
          </p>
        </div>

        {/* Appreciation */}
        <div>
          <label className="block text-white/50 text-sm mb-3 uppercase tracking-wider">
            Annual Appreciation
          </label>
          <input
            type="range"
            min={0}
            max={10}
            step={0.5}
            value={appreciation}
            onChange={(e) => setAppreciation(Number(e.target.value))}
            className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-sovereign-gold"
          />
          <p className="text-white text-xl mt-3">
            {formatPercentage(appreciation)} <span className="text-white/50 text-sm">per annum</span>
          </p>
        </div>

        {/* Results */}
        <div className="pt-8 border-t border-white/10 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-white/50">5-Year Rental Income</span>
            <span className="text-white font-serif text-lg">{formatAED(fiveYearRental)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/50">5-Year Appreciation</span>
            <span className="text-white font-serif text-lg">{formatAED(fiveYearAppreciation)}</span>
          </div>
          <div className="glass-gold p-6 mt-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sovereign-gold font-medium uppercase tracking-wider text-sm">Total 5-Year Return</span>
              <span className="text-sovereign-gold font-serif text-2xl">{formatAED(totalReturn)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sovereign-gold font-medium uppercase tracking-wider text-sm">Total ROI</span>
              <span className="text-sovereign-gold font-serif text-2xl">{formatPercentage(totalROI)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
