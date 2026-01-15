'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone, Mail, Linkedin } from 'lucide-react'
import { cn } from '@/lib/utils'

const experts = [
  {
    id: 1,
    name: 'Jake Jones',
    role: 'CEO & Founder',
    image: 'https://elitepropertydxb.com/_next/image?url=https%3A%2F%2Felitewebsite2024.s3.us-east-2.amazonaws.com%2Ffiles%2F49d1876b-06db-42ec-9c89-7e5fb09832e7&w=384&q=75',
    phone: '+971 50 123 4567',
    email: 'jake@sovereigncapital.ae',
    bio: 'With over 15 years of experience in UAE real estate, Jake leads our vision for exceptional investment opportunities.',
  },
  {
    id: 2,
    name: 'Aaron Leo',
    role: 'CEO & Founder',
    image: 'https://elitepropertydxb.com/_next/image?url=https%3A%2F%2Felitewebsite2024.s3.us-east-2.amazonaws.com%2Ffiles%2Fe8a34edd-387b-4301-a4e8-2ec13bab859e&w=384&q=75',
    phone: '+971 50 987 6543',
    email: 'aaron@sovereigncapital.ae',
    bio: 'Aaron brings strategic insight and deep market knowledge to help clients achieve their investment goals.',
  },
]

export default function TalkToExperts() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-rotate between experts
  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % experts.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <section className="py-20 lg:py-32 bg-sovereign-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-sovereign-gold/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sovereign-green/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
      
      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-sovereign-gold/50 to-transparent animate-pulse" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-sovereign-gold/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sovereign-gold text-sm uppercase tracking-widest mb-4">Expert Guidance</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 uppercase tracking-wide">
            Talk to the Experts
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed text-lg">
            Our property experts have the experience, expertise, and business savvy to guide you 
            in making the right investment, at the right place and the right price.
          </p>
        </div>

        {/* Experts Display */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-2 gap-8">
            {experts.map((expert, index) => (
              <div
                key={expert.id}
                className={cn(
                  "group relative rounded-2xl overflow-hidden transition-all duration-700",
                  index === activeIndex ? "scale-100" : "scale-[0.98] opacity-80"
                )}
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                  <div className="flex gap-8">
                    {/* Image Container with rotation animation */}
                    <div className="relative flex-shrink-0">
                      <div className={cn(
                        "relative w-48 h-64 rounded-xl overflow-hidden transition-transform duration-700",
                        index === activeIndex && "animate-[subtleFloat_4s_ease-in-out_infinite]"
                      )}>
                        <Image
                          src={expert.image}
                          alt={expert.name}
                          fill
                          className="object-cover object-top"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-sovereign-black/60 via-transparent to-transparent" />
                      </div>
                      {/* Decorative ring */}
                      <div className={cn(
                        "absolute -inset-2 border border-sovereign-gold/30 rounded-xl transition-all duration-700",
                        index === activeIndex ? "opacity-100 rotate-2" : "opacity-0 rotate-0"
                      )} />
                      <div className={cn(
                        "absolute -inset-4 border border-sovereign-gold/10 rounded-xl transition-all duration-700",
                        index === activeIndex ? "opacity-100 -rotate-1" : "opacity-0 rotate-0"
                      )} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between py-2">
                      <div>
                        <h3 className="font-serif text-3xl text-white mb-2 group-hover:text-sovereign-gold transition-colors">
                          {expert.name}
                        </h3>
                        <p className="text-sovereign-gold text-sm uppercase tracking-wider mb-4">
                          {expert.role}
                        </p>
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                          {expert.bio}
                        </p>
                      </div>

                      {/* Contact Actions */}
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={`tel:${expert.phone}`}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-sovereign-gold/10 border border-sovereign-gold/30 text-sovereign-gold text-sm rounded-full hover:bg-sovereign-gold hover:text-sovereign-black transition-all duration-300"
                        >
                          <Phone className="w-4 h-4" />
                          Call
                        </a>
                        <a
                          href={`mailto:${expert.email}`}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/20 text-white text-sm rounded-full hover:bg-white/10 transition-all duration-300"
                        >
                          <Mail className="w-4 h-4" />
                          Email
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Layout - Carousel */}
          <div className="lg:hidden">
            <div className="relative">
              {experts.map((expert, index) => (
                <div
                  key={expert.id}
                  className={cn(
                    "transition-all duration-700",
                    index === activeIndex ? "opacity-100 relative" : "opacity-0 absolute inset-0 pointer-events-none"
                  )}
                >
                  {/* Glassmorphism Card */}
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden">
                    <div className="flex flex-col items-center text-center">
                      {/* Image Container */}
                      <div className="relative mb-6">
                        <div className="relative w-40 h-52 rounded-xl overflow-hidden animate-[subtleFloat_4s_ease-in-out_infinite]">
                          <Image
                            src={expert.image}
                            alt={expert.name}
                            fill
                            className="object-cover object-top"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-sovereign-black/60 via-transparent to-transparent" />
                        </div>
                        {/* Decorative rings */}
                        <div className="absolute -inset-2 border border-sovereign-gold/30 rounded-xl rotate-2" />
                        <div className="absolute -inset-4 border border-sovereign-gold/10 rounded-xl -rotate-1" />
                      </div>

                      {/* Content */}
                      <h3 className="font-serif text-2xl text-white mb-2">
                        {expert.name}
                      </h3>
                      <p className="text-sovereign-gold text-sm uppercase tracking-wider mb-4">
                        {expert.role}
                      </p>
                      <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
                        {expert.bio}
                      </p>

                      {/* Contact Actions */}
                      <div className="flex gap-3">
                        <a
                          href={`tel:${expert.phone}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-sovereign-gold text-sovereign-black text-sm font-medium rounded-full hover:bg-white transition-all duration-300"
                        >
                          <Phone className="w-4 h-4" />
                          Call Now
                        </a>
                        <a
                          href={`mailto:${expert.email}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 text-white text-sm rounded-full hover:bg-white/20 transition-all duration-300"
                        >
                          <Mail className="w-4 h-4" />
                          Email
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Mobile Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {experts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      index === activeIndex 
                        ? "bg-sovereign-gold w-8" 
                        : "bg-white/30 w-2 hover:bg-white/50"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link 
            href="/enquire" 
            className="inline-flex items-center gap-2 bg-sovereign-gold text-sovereign-black px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-white transition-colors rounded-full"
          >
            Schedule a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
