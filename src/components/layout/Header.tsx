'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Properties', href: '/properties' },
  { name: 'Intelligence', href: '/intelligence' },
  { name: 'Calculator', href: '/calculator' },
  { name: 'Areas', href: '/areas' },
  { name: 'About', href: '/about' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5" 
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo - 6x bigger */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/logos/LOGO-01.png"
            alt="Sovereign Capital"
            width={300}
            height={300}
            className="h-20 md:h-24 w-auto transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-sans font-medium uppercase tracking-widest transition-all duration-300 relative group",
                scrolled 
                  ? "text-sovereign-charcoal hover:text-sovereign-gold" 
                  : "text-white/80 hover:text-white"
              )}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-sovereign-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-6">
          <Link
            href="/enquire"
            className={cn(
              "px-6 py-3 text-xs font-sans font-medium uppercase tracking-widest transition-all duration-500",
              scrolled
                ? "bg-sovereign-charcoal text-white hover:bg-sovereign-gold hover:text-sovereign-black"
                : "bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20"
            )}
          >
            Schedule Consultation
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className={cn(
            "lg:hidden transition-colors duration-300",
            scrolled ? "text-sovereign-charcoal" : "text-white"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? (
            <X className="h-8 w-8" />
          ) : (
            <Menu className="h-8 w-8" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden transition-all duration-500 overflow-hidden',
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="bg-white/95 backdrop-blur-xl px-6 py-8 space-y-4">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-lg font-sans font-medium text-sovereign-charcoal uppercase tracking-widest hover:text-sovereign-gold transition-all duration-300 py-3 border-b border-sovereign-gray-200"
              onClick={() => setMobileMenuOpen(false)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-6">
            <Link
              href="/enquire"
              className="btn-primary w-full text-center text-xs"
              onClick={() => setMobileMenuOpen(false)}
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
