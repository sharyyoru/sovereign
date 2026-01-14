'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-20 bg-[#f5f3ef] overflow-hidden">
      {/* Header - Centered */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-sovereign-charcoal uppercase tracking-wide">
          What We Do
        </h2>
      </div>

      {/* Horizontal Scroller */}
      <div ref={scrollRef} className="relative">
        <div 
          className="flex gap-6 overflow-x-auto scrollbar-hide px-6 lg:px-8 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex-shrink-0 w-[350px] md:w-[450px] relative overflow-hidden"
            >
              <div className={`${service.color} aspect-square relative overflow-hidden`}>
                {/* Service Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover mix-blend-multiply opacity-60 group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-sovereign-gold rounded-full" />
                <div className="absolute bottom-1/4 left-1/4 w-32 h-32 border border-white/30 rounded-full" />
                
                {/* Content overlay - Black glass background with white text */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="bg-sovereign-black/70 backdrop-blur-md p-6 rounded-lg">
                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-3 uppercase tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
