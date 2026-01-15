'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { X, ArrowRight, Search, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'

const navigation = [
  { name: 'Offplan', href: '/properties?type=offplan' },
  { name: 'Residential', href: '/properties?type=residential' },
  { name: 'Industrial', href: '/properties?type=industrial' },
  { name: 'Properties', href: '/properties' },
  { name: 'Intelligence', href: '/intelligence' },
  { name: 'Calculator', href: '/calculator' },
  { name: 'Areas', href: '/areas' },
  { name: 'About', href: '/about' },
]

const searchPlaceholders = [
  'Search for Properties...',
  'Search for Offplan...',
  'Search for Investments...'
]

const featuredProperties = [
  {
    id: '1',
    title: 'Luxury Residences Starting From AED 1.7 Mn*',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    location: 'Al Reem Island, Abu Dhabi',
  },
  {
    id: '2',
    title: 'Waterfront Villas From AED 4.2 Mn*',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    location: 'Saadiyat Island, Abu Dhabi',
  },
  {
    id: '3',
    title: 'Premium Apartments From AED 2.1 Mn*',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    location: 'Yas Island, Abu Dhabi',
  },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const [headerVisible, setHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [featuredIndex, setFeaturedIndex] = useState(0)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
  const searchInputRef = useRef<HTMLInputElement>(null)
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Animated placeholder rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % searchPlaceholders.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Auto-rotate featured properties
  useEffect(() => {
    if (!menuOpen) return
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % featuredProperties.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [menuOpen])

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/enquire?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&phone=${encodeURIComponent(formData.phone)}&property=${featuredProperties[featuredIndex].id}`)
    setMenuOpen(false)
  }

  const nextProperty = () => setFeaturedIndex((prev) => (prev + 1) % featuredProperties.length)
  const prevProperty = () => setFeaturedIndex((prev) => (prev - 1 + featuredProperties.length) % featuredProperties.length)

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchOpen])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/properties?search=${encodeURIComponent(searchQuery.trim())}`)
      setSearchOpen(false)
      setSearchQuery('')
    }
  }

  // Determine if we need light or dark mode based on page and scroll
  const isDarkMode = isHomePage && !scrolled

  return (
    <>
      {/* Smart Sticky Header Container */}
      <div className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-sovereign-green/95 backdrop-blur-xl shadow-2xl" : ""
      )}>
        {/* Darker gradient overlay for header area - better logo visibility */}
        {!scrolled && (
          <div className="absolute inset-0 h-40 bg-gradient-to-b from-sovereign-black/70 via-sovereign-green/50 to-transparent pointer-events-none" />
        )}

        <div className="relative flex items-center justify-between px-3 md:px-6 py-2 md:py-3 gap-2 md:gap-4">
          {/* Logo */}
          <Link href="/" className="block group flex-shrink-0">
            <img
              src="/logos/LOGO-01-cropped.png"
              alt="Sovereign Capital"
              className="w-[100px] md:w-[140px] lg:w-[160px] h-auto transition-all duration-500 group-hover:scale-105 brightness-0 invert"
            />
          </Link>

          {/* Center Section - Search Bar + Menu Links */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-6">
            {/* Search Bar - Glassmorphism Design */}
            <form onSubmit={handleSearch} className="relative group">
              <div className="relative flex items-center">
                {/* Glassmorphism Container */}
                <div className="relative flex items-center w-[200px] md:w-[320px] lg:w-[400px] h-10 md:h-12 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-500 ease-out hover:bg-white/15 hover:border-white/30 hover:shadow-[0_8px_40px_rgba(59,130,246,0.15)] focus-within:bg-white/15 focus-within:border-white/40 focus-within:shadow-[0_8px_40px_rgba(59,130,246,0.2)] overflow-hidden">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Search Icon */}
                  <div className="flex-shrink-0 pl-4 pr-2">
                    <Search className="w-4 h-4 md:w-5 md:h-5 text-white/60 transition-colors duration-300 group-focus-within:text-white/80" />
                  </div>
                  
                  {/* Input Field */}
                  <div className="relative flex-1 h-full">
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full h-full bg-transparent text-white text-sm md:text-base font-light tracking-wide focus:outline-none placeholder-transparent"
                      placeholder="Search"
                    />
                    {/* Animated Placeholder */}
                    {!searchQuery && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 text-sm md:text-base font-light pointer-events-none text-white/50 whitespace-nowrap">
                        <span 
                          key={placeholderIndex} 
                          className="inline-block animate-[fadeSlideIn_0.4s_ease-out]"
                        >
                          {searchPlaceholders[placeholderIndex]}
                        </span>
                      </span>
                    )}
                  </div>
                  
                  {/* Right Side Icons */}
                  <div className="flex items-center gap-1 pr-2 md:pr-3">
                    {/* AI Sparkle Icon */}
                    <button
                      type="button"
                      className="p-1.5 md:p-2 rounded-full text-white/50 hover:text-white/90 hover:bg-white/10 transition-all duration-300 group/sparkle"
                      title="AI Search"
                    >
                      <Sparkles className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover/sparkle:scale-110 group-hover/sparkle:rotate-12" />
                    </button>
                    
                    {/* Clear/Close Button - Only show when there's text */}
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className={cn(
                        "p-1.5 md:p-2 rounded-full text-white/50 hover:text-white/90 hover:bg-white/10 transition-all duration-300",
                        searchQuery ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
                      )}
                      title="Clear search"
                    >
                      <X className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
            
            {/* Menu Links - Hidden on mobile */}
            <div className="hidden lg:flex items-center gap-6">
              <Link href="/properties?type=offplan" className="text-white font-bold text-sm uppercase tracking-wider hover:text-sovereign-gold transition-colors">
                Offplan
              </Link>
              <Link href="/properties?type=residential" className="text-white font-bold text-sm uppercase tracking-wider hover:text-sovereign-gold transition-colors">
                Residential
              </Link>
              <Link href="/properties?type=industrial" className="text-white font-bold text-sm uppercase tracking-wider hover:text-sovereign-gold transition-colors">
                Industrial
              </Link>
            </div>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="w-9 h-9 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 group bg-sovereign-black/50 backdrop-blur-xl border border-sovereign-gold/30 text-white hover:bg-sovereign-gold hover:text-sovereign-black hover:border-sovereign-gold flex-shrink-0"
          >
            <div className="flex flex-col gap-1.5">
              <span className="block w-5 h-0.5 bg-current transition-all duration-300" />
              <span className="block w-5 h-0.5 bg-current transition-all duration-300" />
            </div>
          </button>
        </div>
      </div>

      {/* Full Screen Menu Overlay - G42 Style */}
      <div
        className={cn(
          "fixed inset-0 z-[100] transition-all duration-700",
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Overlay Background */}
        <div 
          className={cn(
            "absolute inset-0 bg-sovereign-green transition-transform duration-700 origin-right",
            menuOpen ? "translate-x-0" : "translate-x-full"
          )}
        />
        
        {/* Menu Content */}
        <div 
          className={cn(
            "relative h-full flex flex-col p-6 md:p-10 lg:p-14 transition-opacity duration-500 delay-300 overflow-y-auto",
            menuOpen ? "opacity-100" : "opacity-0"
          )}
        >
          {/* Top Row - Logo and Close Button */}
          <div className="flex items-center justify-between mb-8 lg:mb-12">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <img
                src="/logos/LOGO-01-cropped.png"
                alt="Sovereign Capital"
                className="w-[160px] md:w-[200px] lg:w-[240px] h-auto brightness-0 invert"
              />
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Main Content - Two Column Layout on Desktop */}
          <div className="flex-1 flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Left Column - Navigation Links */}
            <nav className="lg:w-1/2 flex items-start lg:items-center">
              <ul className="space-y-2 md:space-y-3 lg:space-y-4">
                {navigation.map((item, index) => (
                  <li 
                    key={item.name}
                    style={{ 
                      transitionDelay: menuOpen ? `${index * 80 + 300}ms` : '0ms',
                      transform: menuOpen ? 'translateX(0)' : 'translateX(40px)',
                      opacity: menuOpen ? 1 : 0
                    }}
                    className="transition-all duration-500"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-white hover:text-sovereign-gold transition-colors duration-300 block leading-tight"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Column - Featured Property & Inquiry Form */}
            <div 
              className="lg:w-1/2 flex flex-col"
              style={{ 
                transitionDelay: menuOpen ? '600ms' : '0ms',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              {/* Featured Property Card */}
              <div className="relative rounded-xl overflow-hidden mb-6 group">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${featuredProperties[featuredIndex].image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sovereign-black/90 via-sovereign-black/40 to-transparent" />
                
                {/* Content */}
                <div className="relative p-6 md:p-8 min-h-[200px] md:min-h-[240px] flex flex-col justify-end">
                  {/* Navigation Arrows */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button 
                      onClick={prevProperty}
                      className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={nextProperty}
                      className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Property Indicators */}
                  <div className="absolute top-4 left-6 flex gap-1.5">
                    {featuredProperties.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setFeaturedIndex(idx)}
                        className={cn(
                          "w-2 h-2 rounded-full transition-all duration-300",
                          idx === featuredIndex ? "bg-sovereign-gold w-6" : "bg-white/40 hover:bg-white/60"
                        )}
                      />
                    ))}
                  </div>
                  
                  <p className="text-white/60 text-sm mb-1">{featuredProperties[featuredIndex].location}</p>
                  <h3 
                    key={featuredIndex}
                    className="text-xl md:text-2xl lg:text-3xl font-serif text-white animate-[fadeSlideIn_0.4s_ease-out]"
                  >
                    {featuredProperties[featuredIndex].title}
                  </h3>
                </div>
              </div>

              {/* Inquiry Form */}
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-sovereign-gold/50 transition-colors rounded-lg"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-sovereign-gold/50 transition-colors rounded-lg"
                    required
                  />
                </div>
                <div className="flex gap-3">
                  <div className="flex items-center gap-2 px-3 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg">
                    <span className="text-lg">🇦🇪</span>
                    <span className="text-white/60 text-sm">+971</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="flex-1 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-sovereign-gold/50 transition-colors rounded-lg"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-sovereign-gold text-sovereign-black font-medium text-sm uppercase tracking-wider hover:bg-white transition-colors rounded-lg whitespace-nowrap"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-6 mt-8 border-t border-white/20">
            <div className="flex gap-6">
              <Link href="/enquire" onClick={() => setMenuOpen(false)} className="text-white/60 hover:text-white text-sm transition-colors">
                Contact
              </Link>
              <Link href="/about" onClick={() => setMenuOpen(false)} className="text-white/60 hover:text-white text-sm transition-colors">
                Careers
              </Link>
            </div>
            <Link
              href="/enquire"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2 bg-sovereign-gold text-sovereign-black px-5 py-2.5 text-sm font-medium uppercase tracking-wider hover:bg-white transition-colors"
            >
              Make Enquiry
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
