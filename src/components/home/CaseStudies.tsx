'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    id: '1',
    title: 'UK INVESTOR ACHIEVES 8.2% YIELD ON SAADIYAT VILLA',
    category: 'Investment Strategy',
    description: 'Strategic property selection and timing delivered exceptional returns for a first-time Abu Dhabi investor.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
  },
  {
    id: '2',
    title: 'GOLDEN VISA SECURED IN 45 DAYS',
    category: 'Golden Visa',
    description: 'Streamlined process and expert guidance helped a family secure their UAE residency through property investment.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
  },
  {
    id: '3',
    title: 'PORTFOLIO DIVERSIFICATION ACROSS 3 ISLANDS',
    category: 'Portfolio Management',
    description: 'Strategic allocation across Al Reem, Saadiyat, and Yas delivered balanced risk and growth.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
]

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0)

  // Auto-rotate between case studies
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % caseStudies.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-sovereign-green overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={caseStudies[activeIndex].image}
          alt={caseStudies[activeIndex].title}
          fill
          className="object-cover opacity-20 transition-opacity duration-700"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-sovereign-gold rounded-full" />
      <div className="absolute bottom-40 left-20 w-6 h-6 bg-sovereign-gold rounded-full opacity-60" />
      <div className="absolute top-1/3 left-1/4 w-20 h-20 border border-white/10 rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <p className="text-white/60 text-sm uppercase tracking-widest mb-2">Case Studies</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                <span className="text-white text-sm">↓</span>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study Titles - Stacked */}
        <div className="space-y-4 mb-16">
          {caseStudies.map((study, index) => (
            <button
              key={study.id}
              onClick={() => setActiveIndex(index)}
              className={`block text-left w-full transition-all duration-500 ${
                index === activeIndex 
                  ? 'text-white' 
                  : 'text-white/30 hover:text-white/50'
              }`}
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif uppercase tracking-wide leading-tight">
                {study.title}
              </h2>
            </button>
          ))}
        </div>

        {/* Active Case Study Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-sovereign-gold text-sm uppercase tracking-widest mb-4">
              {caseStudies[activeIndex].category}
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              {caseStudies[activeIndex].description}
            </p>
            <Link 
              href="/intelligence"
              className="inline-flex items-center gap-2 bg-sovereign-gold text-sovereign-black px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-white transition-colors"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-end gap-3">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-sovereign-gold' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
