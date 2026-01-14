'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Luxury Villas',
    description: 'We specialize in sourcing and acquiring exclusive beachfront and golf course villas across Abu Dhabi\'s most prestigious communities. From Saadiyat Island\'s cultural district to the serene shores of Yas Island, our portfolio represents the pinnacle of luxury living. Each property is carefully vetted for investment potential, architectural excellence, and lifestyle value.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    color: 'bg-gradient-to-br from-pink-200 to-pink-300',
    href: '/properties?type=villa'
  },
  {
    title: 'Premium Apartments',
    description: 'Experience elevated urban living with our curated selection of high-rise residences offering panoramic views across the Abu Dhabi skyline and waterfront. We connect discerning investors with premium apartments in iconic towers, featuring world-class amenities, smart home technology, and direct access to the city\'s finest dining, shopping, and entertainment venues.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    color: 'bg-gradient-to-br from-blue-200 to-indigo-300',
    href: '/properties?type=apartment'
  },
  {
    title: 'Investment Advisory',
    description: 'Our data-driven investment strategies are meticulously tailored to your unique financial goals and risk profile. We combine deep market intelligence with decades of regional expertise to identify opportunities that deliver sustainable returns. From portfolio construction to exit planning, our advisory team guides you through every stage of your investment journey.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80',
    color: 'bg-gradient-to-br from-orange-200 to-amber-300',
    href: '/calculator'
  },
  {
    title: 'Golden Visa',
    description: 'Navigate the UAE Golden Visa application process with confidence through our comprehensive guidance program. We handle every aspect of your residency journey, from property selection that meets visa requirements to document preparation and government liaisons. Our 98% success rate reflects our commitment to securing your family\'s future in the UAE.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    color: 'bg-gradient-to-br from-yellow-200 to-amber-300',
    href: '/intelligence/golden-visa-guide'
  },
  {
    title: 'Market Intelligence',
    description: 'Stay ahead of market movements with our exclusive reports and real-time analysis of Abu Dhabi\'s evolving real estate landscape. Our intelligence platform delivers actionable insights on pricing trends, emerging neighborhoods, regulatory changes, and macroeconomic factors that impact your investments. Knowledge is power—we ensure you have both.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    color: 'bg-gradient-to-br from-purple-200 to-violet-300',
    href: '/intelligence'
  },
]

export default function ServiceScroller() {
  const [activeIndex, setActiveIndex] = useState(0)

  // Auto-scroll loop - slower interval
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setActiveIndex((prev) => (prev - 1 + services.length) % services.length)
    } else {
      setActiveIndex((prev) => (prev + 1) % services.length)
    }
  }

  // Calculate position for each item in the carousel
  const getItemStyle = (index: number) => {
    // Calculate the offset from active index (handling wrap-around)
    let offset = index - activeIndex
    if (offset > services.length / 2) offset -= services.length
    if (offset < -services.length / 2) offset += services.length
    
    // Only show items within range
    if (Math.abs(offset) > 2) {
      return { display: 'none' }
    }
    
    // G42-style positioning with smooth transitions
    const translateX = offset * 280
    const translateY = Math.abs(offset) === 2 ? 50 : Math.abs(offset) === 1 ? 25 : 0
    const scale = offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.85 : 0.7
    const opacity = offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.8 : 0.5
    const zIndex = 30 - Math.abs(offset) * 10
    const rotateY = offset * 15
    
    return {
      transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) perspective(1000px) rotateY(${rotateY}deg)`,
      opacity,
      zIndex,
      transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
    }
  }

  return (
    <section className="min-h-screen bg-[#f5f3ef] overflow-hidden flex flex-col justify-center py-16 md:py-20">
      {/* Header - Centered with paddle buttons */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 md:mb-16 w-full">
        <div className="flex items-center justify-between">
          <div className="flex-1" />
          <h2 className="text-3xl md:text-5xl font-serif text-sovereign-charcoal uppercase tracking-wide text-center">
            What We Do
          </h2>
          <div className="flex-1 flex justify-end gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-sovereign-charcoal/20 flex items-center justify-center text-sovereign-charcoal hover:bg-sovereign-charcoal hover:text-white transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-sovereign-charcoal/20 flex items-center justify-center text-sovereign-charcoal hover:bg-sovereign-charcoal hover:text-white transition-all duration-300"
            >
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Rotating Carousel Gallery */}
      <div className="flex-1 flex items-center justify-center px-4 relative" style={{ perspective: '1200px' }}>
        <div className="relative w-full h-[500px] flex items-center justify-center">
          {services.map((service, index) => {
            const style = getItemStyle(index)
            if (style.display === 'none') return null
            
            const offset = index - activeIndex
            const normalizedOffset = offset > services.length / 2 ? offset - services.length : offset < -services.length / 2 ? offset + services.length : offset
            const isCenter = normalizedOffset === 0
            
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group absolute overflow-hidden rounded-3xl flex-shrink-0"
                style={{
                  width: isCenter ? '320px' : Math.abs(normalizedOffset) === 1 ? '260px' : '200px',
                  height: isCenter ? '420px' : Math.abs(normalizedOffset) === 1 ? '360px' : '280px',
                  ...style,
                }}
              >
                <div className={`${service.color} w-full h-full relative overflow-hidden rounded-3xl`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover mix-blend-multiply opacity-60 group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Decorative dots */}
                  <div className="absolute top-5 right-5 w-2.5 h-2.5 bg-sovereign-gold rounded-full" />
                  <div className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-white/60 rounded-full" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Active Item Description - Centered below */}
      <div className="text-center mt-12 md:mt-16 max-w-3xl mx-auto px-6 transition-all duration-1000 ease-out">
        <h3 className="text-xl md:text-2xl font-serif text-sovereign-charcoal mb-4 uppercase tracking-wide">
          {services[activeIndex].title}
        </h3>
        <p className="text-sovereign-charcoal/70 text-sm md:text-base leading-relaxed">
          {services[activeIndex].description}
        </p>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              index === activeIndex 
                ? 'bg-sovereign-gold w-6' 
                : 'bg-sovereign-charcoal/20 hover:bg-sovereign-charcoal/40'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
