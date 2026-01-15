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
    color: 'bg-gradient-to-br from-sovereign-gold/40 to-sovereign-gold-dark/50',
    href: '/properties?type=villa'
  },
  {
    title: 'Premium Apartments',
    description: 'Experience elevated urban living with our curated selection of high-rise residences offering panoramic views across the Abu Dhabi skyline and waterfront. We connect discerning investors with premium apartments in iconic towers, featuring world-class amenities, smart home technology, and direct access to the city\'s finest dining, shopping, and entertainment venues.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    color: 'bg-gradient-to-br from-sovereign-gold/40 to-sovereign-gold-dark/50',
    href: '/properties?type=apartment'
  },
  {
    title: 'Investment Advisory',
    description: 'Our data-driven investment strategies are meticulously tailored to your unique financial goals and risk profile. We combine deep market intelligence with decades of regional expertise to identify opportunities that deliver sustainable returns. From portfolio construction to exit planning, our advisory team guides you through every stage of your investment journey.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80',
    color: 'bg-gradient-to-br from-sovereign-gold/40 to-sovereign-gold-dark/50',
    href: '/calculator'
  },
  {
    title: 'Golden Visa',
    description: 'Navigate the UAE Golden Visa application process with confidence through our comprehensive guidance program. We handle every aspect of your residency journey, from property selection that meets visa requirements to document preparation and government liaisons. Our 98% success rate reflects our commitment to securing your family\'s future in the UAE.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    color: 'bg-gradient-to-br from-sovereign-gold/40 to-sovereign-gold-dark/50',
    href: '/intelligence/golden-visa-guide'
  },
  {
    title: 'Market Intelligence',
    description: 'Stay ahead of market movements with our exclusive reports and real-time analysis of Abu Dhabi\'s evolving real estate landscape. Our intelligence platform delivers actionable insights on pricing trends, emerging neighborhoods, regulatory changes, and macroeconomic factors that impact your investments. Knowledge is power—we ensure you have both.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    color: 'bg-gradient-to-br from-sovereign-gold/40 to-sovereign-gold-dark/50',
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
    
    // G42-style positioning with smooth transitions - tighter spacing
    const translateX = offset * 220
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
    <section className="min-h-screen bg-[#f5f3ef] overflow-hidden flex flex-col justify-center py-8 md:py-12 relative">
      {/* Animated Glass Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-sovereign-gold/5" />
        
        {/* Animated decorative lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
          <line x1="10%" y1="0" x2="30%" y2="100%" stroke="#1a1a1a" strokeWidth="0.5" className="animate-pulse" style={{ animationDelay: '0s' }} />
          <line x1="25%" y1="0" x2="45%" y2="100%" stroke="#c9a962" strokeWidth="0.5" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <line x1="50%" y1="0" x2="70%" y2="100%" stroke="#1a1a1a" strokeWidth="0.5" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <line x1="75%" y1="0" x2="95%" y2="100%" stroke="#c9a962" strokeWidth="0.5" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
          <line x1="90%" y1="0" x2="60%" y2="100%" stroke="#1a1a1a" strokeWidth="0.3" className="animate-pulse" style={{ animationDelay: '2s' }} />
        </svg>
        
        {/* Floating glass circles */}
        <div className="absolute top-20 left-[15%] w-32 h-32 rounded-full bg-gradient-to-br from-white/30 to-transparent backdrop-blur-sm animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-32 right-[20%] w-24 h-24 rounded-full bg-gradient-to-br from-sovereign-gold/10 to-transparent backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-[10%] w-16 h-16 rounded-full bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Header - Centered with paddle buttons */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-6 md:mb-8 w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex-1" />
          <h2 className="text-3xl md:text-5xl font-serif text-sovereign-charcoal uppercase tracking-wide text-center">
            The Sovereign Way
          </h2>
          <div className="flex-1 flex justify-end gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-sovereign-charcoal/20 flex items-center justify-center text-sovereign-charcoal hover:bg-sovereign-charcoal hover:text-white transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border border-sovereign-charcoal/20 flex items-center justify-center text-sovereign-charcoal hover:bg-sovereign-charcoal hover:text-white transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Mobile Layout - Paddles under title */}
        <div className="flex md:hidden flex-col items-center gap-6">
          <h2 className="text-3xl font-serif text-sovereign-charcoal uppercase tracking-wide text-center">
            The Sovereign Way
          </h2>
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-sovereign-charcoal/20 flex items-center justify-center text-sovereign-charcoal hover:bg-sovereign-charcoal hover:text-white transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-sovereign-charcoal/20 flex items-center justify-center text-sovereign-charcoal hover:bg-sovereign-charcoal hover:text-white transition-all duration-300"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Rotating Carousel Gallery */}
      <div className="relative z-10 flex items-center justify-center px-4" style={{ perspective: '1200px' }}>
        <div className="relative w-full h-[380px] md:h-[420px] flex items-center justify-center">
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
                    className={`object-cover mix-blend-multiply group-hover:scale-110 transition-all duration-700 ${isCenter ? 'opacity-80' : 'opacity-50'}`}
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
      <div className="relative z-10 text-center mt-10 md:mt-8 max-w-3xl mx-auto px-6 transition-all duration-1000 ease-out">
        <h3 className="text-lg md:text-xl font-serif text-sovereign-charcoal mb-2 uppercase tracking-wide">
          {services[activeIndex].title}
        </h3>
        <p className="text-sovereign-charcoal/70 text-sm leading-relaxed">
          {services[activeIndex].description}
        </p>
      </div>

      {/* Progress Dots */}
      <div className="relative z-10 flex justify-center gap-2 mt-6 md:mt-4">
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
