import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Building2, TrendingUp, MapPin, Shield, FileText, Calculator } from 'lucide-react'
import PropertyCard from '@/components/properties/PropertyCard'
import ROICalculatorPreview from '@/components/calculator/ROICalculatorPreview'

const featuredProperties = [
  {
    id: '1',
    title: 'Al Reem Island Penthouse',
    location: 'Al Reem Island, Abu Dhabi',
    price: 8500000,
    bedrooms: 4,
    bathrooms: 5,
    area: 5200,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    type: 'Penthouse',
    goldenVisa: true,
  },
  {
    id: '2',
    title: 'Saadiyat Beach Villa',
    location: 'Saadiyat Island, Abu Dhabi',
    price: 15000000,
    bedrooms: 6,
    bathrooms: 7,
    area: 8500,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    type: 'Villa',
    goldenVisa: true,
  },
  {
    id: '3',
    title: 'Yas Bay Residence',
    location: 'Yas Island, Abu Dhabi',
    price: 3200000,
    bedrooms: 3,
    bathrooms: 4,
    area: 2800,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    type: 'Apartment',
    goldenVisa: true,
  },
]

const valuePropositions = [
  {
    icon: Shield,
    title: 'Advice-First Approach',
    description: 'We prioritize understanding your investment goals before presenting options. No pressure, only informed decisions.',
  },
  {
    icon: TrendingUp,
    title: 'Yield Intelligence',
    description: 'Access proprietary market data and yield analysis specific to Abu Dhabi\'s diverse property landscape.',
  },
  {
    icon: MapPin,
    title: 'Domain Expertise',
    description: 'Deep knowledge of Abu Dhabi\'s emerging luxury zones, from Saadiyat to Al Reem to Yas Island.',
  },
]

const insights = [
  {
    title: 'Abu Dhabi 2030 Economic Vision',
    category: 'Market Intelligence',
    excerpt: 'Understanding how the emirate\'s strategic plan impacts property values and investment opportunities.',
    href: '/intelligence/abu-dhabi-2030',
  },
  {
    title: 'Golden Visa Investment Guide',
    category: 'Investment Guide',
    excerpt: 'Complete analysis of the AED 2M threshold and what it means for international investors.',
    href: '/intelligence/golden-visa-guide',
  },
  {
    title: 'Saadiyat Island: Cultural District',
    category: 'Area Insight',
    excerpt: 'How the Louvre effect continues to drive premium valuations in the cultural heart of Abu Dhabi.',
    href: '/areas/saadiyat-island',
  },
]

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-sovereign-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
            alt="Abu Dhabi Skyline"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-sovereign-black via-sovereign-black/80 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <p className="text-sovereign-gold font-sans text-sm uppercase tracking-[0.3em] mb-6 animate-fade-in">
              Abu Dhabi Real Estate Advisory
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-sovereign-white leading-tight mb-8 animate-slide-up">
              Decisions Driven by{' '}
              <span className="text-sovereign-gold">Understanding</span>
            </h1>
            <p className="text-sovereign-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl animate-slide-up animate-delay-100">
              Premier advisory for sophisticated investors seeking Abu Dhabi properties. 
              We offer strategy-led guidance, not sales pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-delay-200">
              <Link href="/properties" className="btn-primary">
                Explore Properties
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/calculator" className="btn-secondary">
                Calculate ROI
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-sovereign-gold to-transparent" />
        </div>
      </section>

      {/* Value Propositions */}
      <section className="section-padding bg-sovereign-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sovereign-gold font-sans text-sm uppercase tracking-[0.3em] mb-4">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-sovereign-charcoal mb-6">
              Calm. Confident. Considered.
            </h2>
            <p className="text-sovereign-gray-600 max-w-2xl mx-auto">
              In a market often dominated by hype, we offer measured counsel 
              grounded in deep market understanding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {valuePropositions.map((prop, index) => (
              <div 
                key={prop.title}
                className="text-center p-8 bg-white border border-sovereign-gray-100 card-hover"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sovereign-charcoal mb-6">
                  <prop.icon className="h-7 w-7 text-sovereign-gold" />
                </div>
                <h3 className="font-serif text-xl text-sovereign-charcoal mb-4">
                  {prop.title}
                </h3>
                <p className="text-sovereign-gray-600 text-sm leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section-padding bg-sovereign-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="text-sovereign-gold font-sans text-sm uppercase tracking-[0.3em] mb-4">
                Curated Selection
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-sovereign-charcoal">
                Featured Properties
              </h2>
            </div>
            <Link 
              href="/properties" 
              className="mt-4 md:mt-0 inline-flex items-center text-sovereign-gold font-sans text-sm uppercase tracking-widest hover:text-sovereign-gold-dark transition-colors"
            >
              View All Properties
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Preview */}
      <section className="section-padding bg-sovereign-green">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-sovereign-gold font-sans text-sm uppercase tracking-[0.3em] mb-4">
                Investment Intelligence
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-sovereign-white mb-6">
                Yield & ROI Calculator
              </h2>
              <p className="text-sovereign-gray-300 mb-8 leading-relaxed">
                Our high-precision calculator helps you understand potential returns 
                based on Abu Dhabi&apos;s specific market dynamics. Factor in Golden Visa 
                thresholds, rental yields, and appreciation forecasts.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sovereign-gray-300">
                  <div className="w-2 h-2 bg-sovereign-gold" />
                  Golden Visa AED 2M threshold analysis
                </li>
                <li className="flex items-center gap-3 text-sovereign-gray-300">
                  <div className="w-2 h-2 bg-sovereign-gold" />
                  Area-specific rental yield data
                </li>
                <li className="flex items-center gap-3 text-sovereign-gray-300">
                  <div className="w-2 h-2 bg-sovereign-gold" />
                  5-year appreciation projections
                </li>
              </ul>
              <Link href="/calculator" className="btn-primary">
                <Calculator className="mr-2 h-4 w-4" />
                Open Calculator
              </Link>
            </div>
            <div>
              <ROICalculatorPreview />
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Hub */}
      <section className="section-padding bg-sovereign-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="text-sovereign-gold font-sans text-sm uppercase tracking-[0.3em] mb-4">
                Market Intelligence
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-sovereign-charcoal">
                Insights & Analysis
              </h2>
            </div>
            <Link 
              href="/intelligence" 
              className="mt-4 md:mt-0 inline-flex items-center text-sovereign-gold font-sans text-sm uppercase tracking-widest hover:text-sovereign-gold-dark transition-colors"
            >
              View All Insights
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight) => (
              <Link 
                key={insight.title}
                href={insight.href}
                className="group bg-white border border-sovereign-gray-100 p-8 card-hover"
              >
                <p className="text-sovereign-gold font-sans text-xs uppercase tracking-widest mb-4">
                  {insight.category}
                </p>
                <h3 className="font-serif text-xl text-sovereign-charcoal mb-4 group-hover:text-sovereign-gold transition-colors">
                  {insight.title}
                </h3>
                <p className="text-sovereign-gray-600 text-sm leading-relaxed mb-6">
                  {insight.excerpt}
                </p>
                <span className="inline-flex items-center text-sovereign-gold font-sans text-xs uppercase tracking-widest">
                  Read More
                  <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Golden Visa CTA */}
      <section className="section-padding bg-sovereign-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-sovereign-gold mb-8">
            <Shield className="h-10 w-10 text-sovereign-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-sovereign-white mb-6">
            Golden Visa Qualifying Properties
          </h2>
          <p className="text-sovereign-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Invest AED 2 million or more in Abu Dhabi real estate and secure your 
            10-year UAE Golden Visa. We guide you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/properties?goldenVisa=true" className="btn-primary">
              View Qualifying Properties
            </Link>
            <Link href="/intelligence/golden-visa-guide" className="btn-secondary">
              Download Guide
              <FileText className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="section-padding bg-sovereign-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-sovereign-cream border border-sovereign-gray-200 p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-sovereign-charcoal mb-6">
                  Begin Your Investment Journey
                </h2>
                <p className="text-sovereign-gray-600 mb-8 leading-relaxed">
                  Schedule a private consultation with our advisory team. We&apos;ll discuss 
                  your investment objectives, risk tolerance, and help you navigate Abu Dhabi&apos;s 
                  dynamic property market with clarity and confidence.
                </p>
                <Link href="/enquire" className="btn-dark">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="aspect-square relative">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                    alt="Advisory consultation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
