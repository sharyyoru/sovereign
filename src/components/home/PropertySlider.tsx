'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Shield } from 'lucide-react'
import { formatAED } from '@/lib/utils'

const properties = [
  {
    id: '1',
    title: 'Al Reem Island Penthouse',
    location: 'Al Reem Island, Abu Dhabi',
    price: 8500000,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    type: 'Penthouse',
    goldenVisa: true,
  },
  {
    id: '2',
    title: 'Saadiyat Beach Villa',
    location: 'Saadiyat Island, Abu Dhabi',
    price: 15000000,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    type: 'Villa',
    goldenVisa: true,
  },
  {
    id: '3',
    title: 'Yas Bay Residence',
    location: 'Yas Island, Abu Dhabi',
    price: 3200000,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    type: 'Apartment',
    goldenVisa: true,
  },
  {
    id: '4',
    title: 'Al Maryah Tower Suite',
    location: 'Al Maryah Island, Abu Dhabi',
    price: 5800000,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    type: 'Apartment',
    goldenVisa: true,
  },
  {
    id: '5',
    title: 'Mamsha Al Saadiyat Villa',
    location: 'Saadiyat Island, Abu Dhabi',
    price: 12000000,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    type: 'Villa',
    goldenVisa: true,
  },
]

export default function PropertySlider() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-12 w-screen overflow-visible -ml-[5%] md:-ml-[20%] lg:-ml-[40%]" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
      {/* Header - Asymmetric positioning */}
      <div className="ml-[5%] md:ml-[20%] lg:ml-[40%] pr-6 lg:pr-8 mb-8">
        <div className="flex items-center justify-between max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif text-white font-bold">Abu Dhabi&apos;s Top Projects</h2>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Slider - Full screen width scroll */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollBehavior: 'smooth', paddingLeft: '40%' }}
      >
        {properties.map((property, index) => (
          <Link
            key={property.id}
            href={`/properties/${property.id}`}
            className="group flex-shrink-0 w-[315px] md:w-[480px] bg-sovereign-black overflow-hidden"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sovereign-black via-transparent to-transparent" />
              
              {property.goldenVisa && (
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-sovereign-gold px-3 py-1.5">
                  <Shield className="h-3.5 w-3.5 text-sovereign-black" />
                  <span className="text-xs font-medium text-sovereign-black uppercase tracking-wider">
                    Golden Visa
                  </span>
                </div>
              )}
              
              {/* Date overlay like G42 */}
              <div className="absolute bottom-4 left-4 text-white/60 text-sm">
                {property.type}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-white/50 text-sm mb-2">{property.location}</p>
              <h3 className="text-white text-lg font-serif mb-3 group-hover:text-sovereign-gold transition-colors uppercase">
                {property.title}
              </h3>
              <p className="text-sovereign-gold text-xl font-serif">
                {formatAED(property.price)}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Button with Tagline */}
      <div className="ml-[5%] md:ml-[20%] lg:ml-[40%] pr-6 lg:pr-8 mt-8 flex items-center gap-6 flex-wrap">
        <Link 
          href="/properties"
          className="inline-flex items-center gap-2 bg-sovereign-gold text-sovereign-black px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-white transition-colors"
        >
          View All
          <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-white/80 font-serif text-lg italic">
          Your Royal Guide to the best investments in Abu Dhabi
        </p>
      </div>
    </section>
  )
}
