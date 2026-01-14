'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { X, ArrowRight, Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'

const navigation = [
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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const [headerVisible, setHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 50)
      
      // Smart sticky header - hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHeaderVisible(false)
      } else {
        setHeaderVisible(true)
      }
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        headerVisible ? "translate-y-0" : "-translate-y-full",
        scrolled ? "bg-sovereign-charcoal/95 backdrop-blur-xl shadow-lg" : ""
      )}>
        {/* Dark gradient overlay for header area - only when not scrolled */}
        {!scrolled && (
          <div className="absolute inset-0 h-32 bg-gradient-to-b from-black/70 via-black/40 to-transparent pointer-events-none" />
        )}

        <div className="relative flex items-center justify-between px-6 md:px-8 py-4 md:py-6">
          {/* Logo */}
          <Link href="/" className="block group">
            <img
              src="/logos/LOGO-01.png"
              alt="Sovereign Capital"
              className={cn(
                "h-10 md:h-12 lg:h-14 w-auto transition-all duration-500 group-hover:scale-105",
                (isDarkMode || scrolled) ? "brightness-0 invert" : ""
              )}
            />
          </Link>

          {/* Dynamic Search Bar - Center */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-sovereign-charcoal/50" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={cn(
                    "w-72 md:w-96 lg:w-[28rem] pl-11 pr-4 py-3 rounded-full text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sovereign-gold",
                    scrolled
                      ? "bg-white/10 text-white placeholder:text-white/50 border border-white/20"
                      : "bg-white/90 backdrop-blur-xl text-sovereign-charcoal placeholder:text-sovereign-charcoal/50 shadow-lg"
                  )}
                />
                {/* Animated Placeholder */}
                {!searchQuery && (
                  <span className={cn(
                    "absolute left-11 top-1/2 -translate-y-1/2 text-sm pointer-events-none transition-opacity duration-500",
                    scrolled ? "text-white/50" : "text-sovereign-charcoal/50"
                  )}>
                    <span key={placeholderIndex} className="animate-fade-in">
                      {searchPlaceholders[placeholderIndex]}
                    </span>
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className={cn(
              "w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-500 group",
              scrolled
                ? "bg-white/10 text-white hover:bg-sovereign-gold hover:text-sovereign-black border border-white/20"
                : "bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20"
            )}
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
            "relative h-full flex flex-col justify-between p-8 md:p-12 lg:p-16 transition-opacity duration-500 delay-300",
            menuOpen ? "opacity-100" : "opacity-0"
          )}
        >
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={() => setMenuOpen(false)}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex items-center">
            <ul className="space-y-4 md:space-y-6">
              {navigation.map((item, index) => (
                <li 
                  key={item.name}
                  style={{ 
                    transitionDelay: menuOpen ? `${index * 100 + 400}ms` : '0ms',
                    transform: menuOpen ? 'translateX(0)' : 'translateX(50px)',
                    opacity: menuOpen ? 1 : 0
                  }}
                  className="transition-all duration-500"
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-3xl md:text-5xl lg:text-6xl font-serif text-white hover:text-sovereign-gold transition-colors duration-300 block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8 border-t border-white/20">
            <div className="flex gap-8">
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
              className="inline-flex items-center gap-2 bg-sovereign-gold text-sovereign-black px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-white transition-colors"
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
