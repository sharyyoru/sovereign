'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

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
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Determine if we need light or dark mode based on page and scroll
  const isDarkMode = isHomePage && !scrolled

  return (
    <>
      {/* Main Header - Logo only */}
      <header className="fixed top-0 left-0 z-50 p-6 md:p-8">
        <Link href="/" className="block group">
          <Image
            src="/logos/LOGO-01.png"
            alt="Sovereign Capital"
            width={400}
            height={400}
            className={cn(
              "h-16 md:h-20 lg:h-24 w-auto transition-all duration-500 group-hover:scale-105",
              isDarkMode ? "brightness-0 invert" : ""
            )}
            priority
          />
        </Link>
      </header>

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
