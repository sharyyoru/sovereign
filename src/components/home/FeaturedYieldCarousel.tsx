'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'

const featuredProperties = [
  {
    id: '1',
    title: 'Al Reem Island Tower',
    location: 'Al Reem Island',
    yield: 8.2,
    price: 'AED 1.7M',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    type: 'Apartment',
  },
  {
    id: '2',
    title: 'Saadiyat Beach Residence',
    location: 'Saadiyat Island',
    yield: 6.8,
    price: 'AED 4.2M',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    type: 'Villa',
  },
  {
    id: '3',
    title: 'Yas Bay Waterfront',
    location: 'Yas Island',
    yield: 7.5,
    price: 'AED 2.1M',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    type: 'Apartment',
  },
  {
    id: '4',
    title: 'Mamsha Al Saadiyat',
    location: 'Saadiyat Island',
    yield: 6.4,
    price: 'AED 5.8M',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    type: 'Villa',
  },
]

export default function FeaturedYieldCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-rotate
  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredProperties.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isHovered])

  const nextProperty = () => setActiveIndex((prev) => (prev + 1) % featuredProperties.length)
  const prevProperty = () => setActiveIndex((prev) => (prev - 1 + featuredProperties.length) % featuredProperties.length)

  const currentProperty = featuredProperties[activeIndex]

  return (
    <div 
      className="relative aspect-square overflow-hidden rounded-2xl group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image with Transition */}
      {featuredProperties.map((property, index) => (
        <div
          key={property.id}
          className={cn(
            "absolute inset-0 transition-all duration-700 ease-out",
            index === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
          )}
        >
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
          />
        </div>
      ))}
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-sovereign-black via-sovereign-black/60 to-sovereign-black/30" />
      
      {/* Glassmorphism Card */}
      <div className="absolute inset-4 md:inset-6 flex flex-col justify-between">
        {/* Top Section - Navigation */}
        <div className="flex items-center justify-between">
          {/* Property Indicators */}
          <div className="flex gap-1.5">
            {featuredProperties.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "h-1 rounded-full transition-all duration-300",
                  idx === activeIndex 
                    ? "bg-sovereign-gold w-6" 
                    : "bg-white/30 w-1 hover:bg-white/50"
                )}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button 
              onClick={prevProperty}
              className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={nextProperty}
              className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Center - Large Yield Display */}
        <div className="flex-1 flex items-center justify-center">
          <div 
            key={activeIndex}
            className="text-center animate-[fadeSlideIn_0.5s_ease-out]"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-sovereign-gold/20 backdrop-blur-sm flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-sovereign-gold" />
              </div>
              <span className="text-white/60 text-sm uppercase tracking-wider">Rental Yield</span>
            </div>
            <p className="text-sovereign-gold text-6xl md:text-7xl font-serif mb-2">
              {currentProperty.yield}%
            </p>
            <p className="text-white/40 text-sm">Annual Return</p>
          </div>
        </div>
        
        {/* Bottom - Property Info Card */}
        <Link 
          href={`/properties/${currentProperty.id}`}
          className="block"
        >
          <div 
            key={`info-${activeIndex}`}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 md:p-5 hover:bg-white/15 transition-all duration-300 animate-[fadeSlideIn_0.5s_ease-out]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sovereign-gold text-xs uppercase tracking-wider">{currentProperty.type}</span>
                  <span className="text-white/30">•</span>
                  <span className="text-white/50 text-xs">{currentProperty.location}</span>
                </div>
                <h3 className="text-white font-serif text-lg md:text-xl truncate">
                  {currentProperty.title}
                </h3>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-white/50 text-xs mb-0.5">From</p>
                <p className="text-sovereign-gold font-serif text-lg">{currentProperty.price}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-20 h-20 border border-sovereign-gold/20 rounded-full opacity-50" />
      <div className="absolute bottom-20 left-4 w-12 h-12 border border-white/10 rounded-full opacity-30" />
    </div>
  )
}
