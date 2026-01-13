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
    <div className="bg-sovereign-charcoal p-8 border border-sovereign-gray-700">
      <div className="space-y-6">
        {/* Investment Amount */}
        <div>
          <label className="block text-sovereign-gray-400 text-sm mb-2">
            Investment Amount (AED)
          </label>
          <input
            type="range"
            min={500000}
            max={20000000}
            step={100000}
            value={investment}
            onChange={(e) => setInvestment(Number(e.target.value))}
            className="w-full h-2 bg-sovereign-gray-700 rounded-lg appearance-none cursor-pointer accent-sovereign-gold"
          />
          <div className="flex justify-between mt-2">
            <span className="text-sovereign-gold font-serif text-2xl">
              {formatAED(investment)}
            </span>
            {investment >= 2000000 && (
              <span className="text-xs text-sovereign-gold bg-sovereign-gold/10 px-2 py-1">
                Golden Visa Eligible
              </span>
            )}
          </div>
        </div>

        {/* Rental Yield */}
        <div>
          <label className="block text-sovereign-gray-400 text-sm mb-2">
            Expected Rental Yield
          </label>
          <input
            type="range"
            min={3}
            max={10}
            step={0.5}
            value={rentalYield}
            onChange={(e) => setRentalYield(Number(e.target.value))}
            className="w-full h-2 bg-sovereign-gray-700 rounded-lg appearance-none cursor-pointer accent-sovereign-gold"
          />
          <p className="text-sovereign-white text-lg mt-2">
            {formatPercentage(rentalYield)} per annum
          </p>
        </div>

        {/* Appreciation */}
        <div>
          <label className="block text-sovereign-gray-400 text-sm mb-2">
            Annual Appreciation
          </label>
          <input
            type="range"
            min={0}
            max={10}
            step={0.5}
            value={appreciation}
            onChange={(e) => setAppreciation(Number(e.target.value))}
            className="w-full h-2 bg-sovereign-gray-700 rounded-lg appearance-none cursor-pointer accent-sovereign-gold"
          />
          <p className="text-sovereign-white text-lg mt-2">
            {formatPercentage(appreciation)} per annum
          </p>
        </div>

        {/* Results */}
        <div className="pt-6 border-t border-sovereign-gray-700 space-y-4">
          <div className="flex justify-between">
            <span className="text-sovereign-gray-400">5-Year Rental Income</span>
            <span className="text-sovereign-white font-serif">{formatAED(fiveYearRental)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sovereign-gray-400">5-Year Appreciation</span>
            <span className="text-sovereign-white font-serif">{formatAED(fiveYearAppreciation)}</span>
          </div>
          <div className="flex justify-between pt-4 border-t border-sovereign-gray-700">
            <span className="text-sovereign-gold font-medium">Total 5-Year Return</span>
            <span className="text-sovereign-gold font-serif text-xl">{formatAED(totalReturn)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sovereign-gold font-medium">Total ROI</span>
            <span className="text-sovereign-gold font-serif text-xl">{formatPercentage(totalROI)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
