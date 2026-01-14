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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
      {/* Dark gradient overlay for header area */}
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 via-black/30 to-transparent z-40 pointer-events-none" />

      {/* Main Header - Logo only */}
      <header className="fixed top-0 left-0 z-50 p-6 md:p-8">
        <Link href="/" className="block group">
          <img
            src="/logos/LOGO-01.png"
            alt="Sovereign Capital"
            className={cn(
              "h-12 md:h-14 lg:h-16 w-auto transition-all duration-500 group-hover:scale-105",
              isDarkMode ? "brightness-0 invert" : ""
            )}
          />
        </Link>
      </header>

      {/* Dynamic Search Bar - Top Center */}
      <div className="fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-50">
        <div className={cn(
          "flex items-center transition-all duration-500",
          searchOpen ? "w-64 md:w-80" : "w-auto"
        )}>
          {searchOpen ? (
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search properties..."
                className="w-full px-4 py-2.5 pr-10 bg-white/95 backdrop-blur-xl rounded-full text-sovereign-charcoal text-sm placeholder:text-sovereign-charcoal/50 focus:outline-none focus:ring-2 focus:ring-sovereign-gold shadow-lg"
              />
              <button
                type="button"
                onClick={() => {
                  setSearchOpen(false)
                  setSearchQuery('')
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sovereign-charcoal/50 hover:text-sovereign-charcoal"
              >
                <X className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 shadow-lg",
                scrolled || !isHomePage
                  ? "bg-white/95 text-sovereign-charcoal hover:bg-white"
                  : "bg-white/20 backdrop-blur-xl text-white hover:bg-white/30 border border-white/20"
              )}
            >
              <Search className="w-4 h-4" />
              <span className="text-sm font-medium hidden md:inline">Search</span>
            </button>
          )}
        </div>
      </div>

      {/* Sticky Menu Button - G42 Style (Right Side) */}
      <button
        onClick={() => setMenuOpen(true)}
        className={cn(
          "fixed top-6 md:top-8 right-6 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-500 group",
          scrolled || !isHomePage
            ? "bg-sovereign-charcoal text-white hover:bg-sovereign-gold hover:text-sovereign-black"
            : "bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20"
        )}
      >
        <div className="flex flex-col gap-1.5">
          <span className={cn(
            "block w-6 h-0.5 transition-all duration-300",
            scrolled || !isHomePage ? "bg-white group-hover:bg-sovereign-black" : "bg-white"
          )} />
          <span className={cn(
            "block w-6 h-0.5 transition-all duration-300",
            scrolled || !isHomePage ? "bg-white group-hover:bg-sovereign-black" : "bg-white"
          )} />
        </div>
      </button>

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
