'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Luxury Villas',
    description: 'Exclusive beachfront and golf course villas in Abu Dhabi\'s most prestigious communities.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    color: 'bg-gradient-to-br from-amber-100 to-amber-200',
    href: '/properties?type=villa'
  },
  {
    title: 'Premium Apartments',
    description: 'High-rise living with stunning views across the Abu Dhabi skyline and waterfront.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    color: 'bg-gradient-to-br from-blue-100 to-blue-200',
    href: '/properties?type=apartment'
  },
  {
    title: 'Investment Advisory',
    description: 'Data-driven investment strategies tailored to your financial goals and risk profile.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80',
    color: 'bg-gradient-to-br from-emerald-100 to-emerald-200',
    href: '/calculator'
  },
  {
    title: 'Golden Visa',
    description: 'Complete guidance through the UAE Golden Visa application process for property investors.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    color: 'bg-gradient-to-br from-yellow-100 to-yellow-200',
    href: '/intelligence/golden-visa-guide'
  },
  {
    title: 'Market Intelligence',
    description: 'Exclusive reports and analysis on Abu Dhabi\'s evolving real estate landscape.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    color: 'bg-gradient-to-br from-purple-100 to-purple-200',
    href: '/intelligence'
  },
]

export default function ServiceScroller() {
  const [activeIndex, setActiveIndex] = useState(1)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Auto-scroll loop
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setActiveIndex((prev) => (prev - 1 + services.length) % services.length)
    } else {
      setActiveIndex((prev) => (prev + 1) % services.length)
    }
  }

  // Get visible items (prev, current, next)
  const getVisibleItems = () => {
    const prev = (activeIndex - 1 + services.length) % services.length
    const next = (activeIndex + 1) % services.length
    return [prev, activeIndex, next]
  }

  const visibleIndices = getVisibleItems()

  return (
    <section className="py-20 bg-[#f5f3ef] overflow-hidden">
      {/* Header - Centered with paddle buttons */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex-1" />
          <h2 className="text-3xl md:text-4xl font-serif text-sovereign-charcoal uppercase tracking-wide text-center">
            What We Do
          </h2>
          <div className="flex-1 flex justify-end gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-sovereign-charcoal/20 flex items-center justify-center text-sovereign-charcoal hover:bg-sovereign-charcoal/10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-sovereign-charcoal/20 flex items-center justify-center text-sovereign-charcoal hover:bg-sovereign-charcoal/10 transition-colors"
            >
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Diagonal Gallery Layout */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4 md:gap-8 min-h-[500px]">
          {visibleIndices.map((serviceIndex, position) => {
            const service = services[serviceIndex]
            const isCenter = position === 1
            const isLeft = position === 0
            
            return (
              <Link
                key={service.title}
                href={service.href}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${
                  isCenter 
                    ? 'w-[280px] md:w-[400px] h-[350px] md:h-[450px] z-20' 
                    : 'w-[200px] md:w-[300px] h-[280px] md:h-[380px] z-10 opacity-80'
                } ${isLeft ? '-translate-y-8' : position === 2 ? 'translate-y-8' : ''}`}
              >
                <div className={`${service.color} w-full h-full relative overflow-hidden`}>
                  {/* Service Image */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover mix-blend-multiply opacity-70 group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-sovereign-gold rounded-full" />
                </div>
              </Link>
            )
          })}
        </div>

        {/* Active Item Description - Centered below */}
        <div className="text-center mt-8 max-w-2xl mx-auto">
          <p className="text-sovereign-charcoal/80 text-sm md:text-base leading-relaxed">
            {services[activeIndex].description}
          </p>
        </div>
      </div>
    </section>
  )
}
