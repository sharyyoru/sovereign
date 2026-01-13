'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calculator, Info, Download, ArrowRight } from 'lucide-react'
import { formatAED, formatPercentage } from '@/lib/utils'

const areas = [
  { name: 'Al Reem Island', avgYield: 7.2, appreciation: 5.5 },
  { name: 'Saadiyat Island', avgYield: 5.8, appreciation: 6.2 },
  { name: 'Yas Island', avgYield: 6.5, appreciation: 5.8 },
  { name: 'Al Raha Beach', avgYield: 6.8, appreciation: 4.5 },
  { name: 'Khalifa City', avgYield: 7.5, appreciation: 4.0 },
  { name: 'Al Maryah Island', avgYield: 5.5, appreciation: 6.5 },
]

export default function CalculatorPage() {
  const [investment, setInvestment] = useState(2000000)
  const [selectedArea, setSelectedArea] = useState(areas[0])
  const [holdingPeriod, setHoldingPeriod] = useState(5)
  const [financingPercentage, setFinancingPercentage] = useState(0)
  const [interestRate, setInterestRate] = useState(4.5)

  const downPayment = investment * (1 - financingPercentage / 100)
  const loanAmount = investment * (financingPercentage / 100)
  const annualInterest = loanAmount * (interestRate / 100)
  
  const annualRental = investment * (selectedArea.avgYield / 100)
  const netAnnualRental = annualRental - annualInterest
  const totalRentalIncome = netAnnualRental * holdingPeriod
  
  const futureValue = investment * Math.pow(1 + selectedArea.appreciation / 100, holdingPeriod)
  const capitalAppreciation = futureValue - investment
  
  const totalReturn = totalRentalIncome + capitalAppreciation
  const totalROI = (totalReturn / downPayment) * 100
  const annualizedROI = (Math.pow(1 + totalReturn / downPayment, 1 / holdingPeriod) - 1) * 100

  return (
    <div className="pt-20 min-h-screen bg-sovereign-cream">
      {/* Header */}
      <section className="bg-sovereign-charcoal py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sovereign-gold font-sans text-sm uppercase tracking-[0.3em] mb-4">
              Investment Intelligence
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-sovereign-white mb-6">
              Yield & ROI Calculator
            </h1>
            <p className="text-sovereign-gray-300 text-lg leading-relaxed">
              Calculate your potential returns based on Abu Dhabi&apos;s specific market dynamics. 
              Our calculator factors in area-specific yields, appreciation rates, and financing options.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Inputs */}
            <div className="lg:col-span-2 space-y-8">
              {/* Investment Amount */}
              <div className="bg-white p-8 border border-sovereign-gray-200">
                <h3 className="font-serif text-xl text-sovereign-charcoal mb-6 flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-sovereign-gold" />
                  Investment Details
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sovereign-gray-600 text-sm mb-2">
                      Property Value (AED)
                    </label>
                    <input
                      type="range"
                      min={500000}
                      max={50000000}
                      step={100000}
                      value={investment}
                      onChange={(e) => setInvestment(Number(e.target.value))}
                      className="w-full h-2 bg-sovereign-gray-200 rounded-lg appearance-none cursor-pointer accent-sovereign-gold"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-sovereign-gold font-serif text-2xl">
                        {formatAED(investment)}
                      </span>
                      {investment >= 2000000 && (
                        <span className="text-xs text-sovereign-gold bg-sovereign-gold/10 px-3 py-1 flex items-center gap-1">
                          <Info className="h-3 w-3" />
                          Golden Visa Eligible
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sovereign-gray-600 text-sm mb-2">
                      Select Area
                    </label>
                    <select
                      value={selectedArea.name}
                      onChange={(e) => setSelectedArea(areas.find(a => a.name === e.target.value) || areas[0])}
                      className="select-field"
                    >
                      {areas.map((area) => (
                        <option key={area.name} value={area.name}>
                          {area.name} (Yield: {area.avgYield}%, Appreciation: {area.appreciation}%)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sovereign-gray-600 text-sm mb-2">
                      Holding Period: {holdingPeriod} Years
                    </label>
                    <input
                      type="range"
                      min={1}
                      max={15}
                      step={1}
                      value={holdingPeriod}
                      onChange={(e) => setHoldingPeriod(Number(e.target.value))}
                      className="w-full h-2 bg-sovereign-gray-200 rounded-lg appearance-none cursor-pointer accent-sovereign-gold"
                    />
                  </div>
                </div>
              </div>

              {/* Financing */}
              <div className="bg-white p-8 border border-sovereign-gray-200">
                <h3 className="font-serif text-xl text-sovereign-charcoal mb-6">
                  Financing Options
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sovereign-gray-600 text-sm mb-2">
                      Financing: {financingPercentage}% (Down Payment: {100 - financingPercentage}%)
                    </label>
                    <input
                      type="range"
                      min={0}
                      max={75}
                      step={5}
                      value={financingPercentage}
                      onChange={(e) => setFinancingPercentage(Number(e.target.value))}
                      className="w-full h-2 bg-sovereign-gray-200 rounded-lg appearance-none cursor-pointer accent-sovereign-gold"
                    />
                    <div className="flex justify-between mt-2 text-sm text-sovereign-gray-600">
                      <span>Down Payment: {formatAED(downPayment)}</span>
                      <span>Loan: {formatAED(loanAmount)}</span>
                    </div>
                  </div>

                  {financingPercentage > 0 && (
                    <div>
                      <label className="block text-sovereign-gray-600 text-sm mb-2">
                        Interest Rate: {formatPercentage(interestRate)}
                      </label>
                      <input
                        type="range"
                        min={3}
                        max={8}
                        step={0.25}
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full h-2 bg-sovereign-gray-200 rounded-lg appearance-none cursor-pointer accent-sovereign-gold"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-1">
              <div className="bg-sovereign-charcoal p-8 sticky top-28">
                <h3 className="font-serif text-xl text-sovereign-white mb-6">
                  Investment Summary
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between py-3 border-b border-sovereign-gray-700">
                    <span className="text-sovereign-gray-400 text-sm">Property Value</span>
                    <span className="text-sovereign-white font-serif">{formatAED(investment)}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-sovereign-gray-700">
                    <span className="text-sovereign-gray-400 text-sm">Your Investment</span>
                    <span className="text-sovereign-white font-serif">{formatAED(downPayment)}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-sovereign-gray-700">
                    <span className="text-sovereign-gray-400 text-sm">Annual Rental (Gross)</span>
                    <span className="text-sovereign-white font-serif">{formatAED(annualRental)}</span>
                  </div>
                  {financingPercentage > 0 && (
                    <div className="flex justify-between py-3 border-b border-sovereign-gray-700">
                      <span className="text-sovereign-gray-400 text-sm">Annual Interest Cost</span>
                      <span className="text-red-400 font-serif">-{formatAED(annualInterest)}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-3 border-b border-sovereign-gray-700">
                    <span className="text-sovereign-gray-400 text-sm">{holdingPeriod}-Year Rental Income</span>
                    <span className="text-sovereign-white font-serif">{formatAED(totalRentalIncome)}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-sovereign-gray-700">
                    <span className="text-sovereign-gray-400 text-sm">Capital Appreciation</span>
                    <span className="text-sovereign-white font-serif">{formatAED(capitalAppreciation)}</span>
                  </div>
                </div>

                <div className="bg-sovereign-gold/10 p-6 mb-6">
                  <div className="flex justify-between mb-4">
                    <span className="text-sovereign-gold text-sm font-medium">Total Return</span>
                    <span className="text-sovereign-gold font-serif text-2xl">{formatAED(totalReturn)}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-sovereign-gold text-sm font-medium">Total ROI</span>
                    <span className="text-sovereign-gold font-serif text-2xl">{formatPercentage(totalROI)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sovereign-gold text-sm font-medium">Annualized ROI</span>
                    <span className="text-sovereign-gold font-serif text-2xl">{formatPercentage(annualizedROI)}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href="/enquire" className="btn-primary w-full text-center">
                    Discuss This Scenario
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <button className="btn-secondary w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Export Report
                  </button>
                </div>

                <p className="text-sovereign-gray-500 text-xs mt-6 leading-relaxed">
                  * Calculations are estimates based on historical data and market projections. 
                  Actual returns may vary. Consult with our advisors for personalized analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
