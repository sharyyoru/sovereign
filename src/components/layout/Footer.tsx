import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  properties: [
    { name: 'Luxury Villas', href: '/properties?type=villa' },
    { name: 'Premium Apartments', href: '/properties?type=apartment' },
    { name: 'Commercial Spaces', href: '/properties?type=commercial' },
    { name: 'Off-Plan Projects', href: '/properties?type=offplan' },
  ],
  intelligence: [
    { name: 'Market Reports', href: '/intelligence/reports' },
    { name: 'Investment Guides', href: '/intelligence/guides' },
    { name: 'Area Insights', href: '/areas' },
    { name: 'Decision Files', href: '/intelligence/decisions' },
  ],
  company: [
    { name: 'Our Philosophy', href: '/about' },
    { name: 'Advisory Team', href: '/about#team' },
    { name: 'Client Stories', href: '/about#stories' },
    { name: 'Contact', href: '/enquire' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-sovereign-charcoal text-sovereign-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/logos/LOGO-02.png"
                alt="Sovereign Capital"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
              <span className="text-sovereign-gold font-serif text-xl tracking-wide">
                SOVEREIGN CAPITAL
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              Premier real estate advisory for sophisticated investors seeking 
              Abu Dhabi properties. Decisions driven by understanding.
            </p>
            <div className="space-y-3">
              <a href="mailto:advisory@sovereigncapital.ae" className="flex items-center gap-3 text-sm hover:text-sovereign-gold transition-colors">
                <Mail className="h-4 w-4 text-sovereign-gold" />
                advisory@sovereigncapital.ae
              </a>
              <a href="tel:+97124419000" className="flex items-center gap-3 text-sm hover:text-sovereign-gold transition-colors">
                <Phone className="h-4 w-4 text-sovereign-gold" />
                +971 2 441 9000
              </a>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 text-sovereign-gold mt-0.5" />
                <span>Al Maryah Island, Abu Dhabi, UAE</span>
              </div>
            </div>
          </div>

          {/* Properties */}
          <div>
            <h3 className="text-sovereign-gold font-serif text-lg mb-4">Properties</h3>
            <ul className="space-y-3">
              {footerLinks.properties.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-sovereign-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Intelligence */}
          <div>
            <h3 className="text-sovereign-gold font-serif text-lg mb-4">Intelligence</h3>
            <ul className="space-y-3">
              {footerLinks.intelligence.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-sovereign-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sovereign-gold font-serif text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-sovereign-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sovereign-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-sovereign-gray-500">
              © {new Date().getFullYear()} Sovereign Capital. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-xs text-sovereign-gray-500 hover:text-sovereign-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-sovereign-gray-500 hover:text-sovereign-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
