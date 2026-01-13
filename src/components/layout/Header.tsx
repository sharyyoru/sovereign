'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sovereign-charcoal/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logos/LOGO-02.png"
            alt="Sovereign Capital"
            width={50}
            height={50}
            className="h-12 w-auto"
          />
          <div className="hidden sm:block">
            <span className="text-sovereign-gold font-serif text-xl tracking-wide">
              SOVEREIGN CAPITAL
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-sans font-medium text-sovereign-gray-300 uppercase tracking-widest hover:text-sovereign-gold transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-6">
          <Link
            href="/enquire"
            className="btn-primary text-xs"
          >
            Schedule Consultation
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden text-sovereign-gold"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden transition-all duration-300 overflow-hidden',
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="bg-sovereign-black px-6 py-6 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-sm font-sans font-medium text-sovereign-gray-300 uppercase tracking-widest hover:text-sovereign-gold transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-sovereign-gray-800">
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
