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
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-sovereign-black overflow-hidden">
        {/* Abu Dhabi Image - Sheikh Zayed Grand Mosque */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
            alt="Abu Dhabi Architecture"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-sovereign-black via-transparent to-sovereign-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-sovereign-black/90 via-sovereign-black/50 to-transparent" />
        
        {/* Animated background elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sovereign-gold/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-sovereign-gold/5 rounded-full blur-3xl animate-float" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 pt-40">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-8 animate-fade-in">
              <div className="w-12 h-px bg-sovereign-gold" />
              <p className="text-sovereign-gold font-sans text-sm uppercase tracking-[0.4em]">
                Abu Dhabi Real Estate Advisory
              </p>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.1] mb-8 animate-slide-up">
              Decisions Driven by{' '}
              <span className="gradient-text">Understanding</span>
            </h1>
            <p className="text-white/70 text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl animate-slide-up animate-delay-100">
              Premier advisory for sophisticated investors seeking Abu Dhabi properties. 
              Strategy-led guidance, not sales pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 animate-slide-up animate-delay-200">
              <Link href="/properties" className="btn-primary group">
                Explore Properties
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/calculator" className="btn-glass">
                Calculate ROI
              </Link>
            </div>
            
            {/* Stats bar */}
            <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl animate-slide-up animate-delay-300">
              <div className="glass-gold p-6 text-center">
                <p className="text-3xl font-serif text-sovereign-gold mb-1">AED 2B+</p>
                <p className="text-xs text-white/50 uppercase tracking-wider">Transactions Advised</p>
              </div>
              <div className="glass-gold p-6 text-center">
                <p className="text-3xl font-serif text-sovereign-gold mb-1">200+</p>
                <p className="text-xs text-white/50 uppercase tracking-wider">Golden Visas Secured</p>
              </div>
              <div className="glass-gold p-6 text-center">
                <p className="text-3xl font-serif text-sovereign-gold mb-1">7.2%</p>
                <p className="text-xs text-white/50 uppercase tracking-wider">Avg. Rental Yield</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-sovereign-gold to-transparent" />
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="section-padding bg-sovereign-black relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sovereign-charcoal via-sovereign-black to-sovereign-black" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-sovereign-gold/50" />
              <p className="text-sovereign-gold font-sans text-sm uppercase tracking-[0.4em]">
                Our Philosophy
              </p>
              <div className="w-12 h-px bg-sovereign-gold/50" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Calm. Confident. <span className="gradient-text">Considered.</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              In a market often dominated by hype, we offer measured counsel 
              grounded in deep market understanding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {valuePropositions.map((prop, index) => (
              <div 
                key={prop.title}
                className="group text-center p-10 card-glass relative overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-sovereign-gold/0 via-sovereign-gold/5 to-sovereign-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-20 h-20 glass-gold mb-8 group-hover:scale-110 transition-transform duration-500">
                    <prop.icon className="h-8 w-8 text-sovereign-gold" />
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-sovereign-gold transition-colors duration-300">
                    {prop.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section-padding bg-gradient-to-b from-sovereign-black to-sovereign-charcoal relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sovereign-gold/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-sovereign-gold" />
                <p className="text-sovereign-gold font-sans text-sm uppercase tracking-[0.4em]">
                  Curated Selection
                </p>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-white">
                Featured Properties
              </h2>
            </div>
            <Link 
              href="/properties" 
              className="mt-6 md:mt-0 inline-flex items-center text-sovereign-gold font-sans text-sm uppercase tracking-widest hover:text-white transition-colors group"
            >
              View All Properties
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
      <section className="section-padding bg-sovereign-black relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sovereign-gold/5 rounded-full blur-3xl animate-pulse-slow" />
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-sovereign-gold" />
                <p className="text-sovereign-gold font-sans text-sm uppercase tracking-[0.4em]">
                  Investment Intelligence
                </p>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                Yield & ROI <span className="gradient-text">Calculator</span>
              </h2>
              <p className="text-white/60 mb-10 leading-relaxed text-lg">
                Our high-precision calculator helps you understand potential returns 
                based on Abu Dhabi&apos;s specific market dynamics.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 glass p-4">
                  <div className="w-3 h-3 bg-sovereign-gold rounded-full" />
                  <span className="text-white/80">Golden Visa AED 2M threshold analysis</span>
                </div>
                <div className="flex items-center gap-4 glass p-4">
                  <div className="w-3 h-3 bg-sovereign-gold rounded-full" />
                  <span className="text-white/80">Area-specific rental yield data</span>
                </div>
                <div className="flex items-center gap-4 glass p-4">
                  <div className="w-3 h-3 bg-sovereign-gold rounded-full" />
                  <span className="text-white/80">5-year appreciation projections</span>
                </div>
              </div>
              <Link href="/calculator" className="btn-primary group">
                <Calculator className="mr-2 h-4 w-4" />
                Open Calculator
                <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-sovereign-gold/10 blur-3xl rounded-full" />
              <div className="relative">
                <ROICalculatorPreview />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Hub */}
      <section className="section-padding bg-gradient-to-b from-sovereign-charcoal to-sovereign-black relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sovereign-gold/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-sovereign-gold" />
                <p className="text-sovereign-gold font-sans text-sm uppercase tracking-[0.4em]">
                  Market Intelligence
                </p>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-white">
                Insights & Analysis
              </h2>
            </div>
            <Link 
              href="/intelligence" 
              className="mt-6 md:mt-0 inline-flex items-center text-sovereign-gold font-sans text-sm uppercase tracking-widest hover:text-white transition-colors group"
            >
              View All Insights
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight) => (
              <Link 
                key={insight.title}
                href={insight.href}
                className="group card-glass p-8 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-sovereign-gold/0 to-sovereign-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <p className="text-sovereign-gold font-sans text-xs uppercase tracking-widest mb-4">
                    {insight.category}
                  </p>
                  <h3 className="font-serif text-xl text-white mb-4 group-hover:text-sovereign-gold transition-colors duration-300">
                    {insight.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    {insight.excerpt}
                  </p>
                  <span className="inline-flex items-center text-sovereign-gold font-sans text-xs uppercase tracking-widest">
                    Read More
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Golden Visa CTA */}
      <section className="section-padding bg-sovereign-black relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sovereign-gold/10 rounded-full blur-3xl animate-pulse-slow" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 glass-gold mb-10 animate-float">
            <Shield className="h-12 w-12 text-sovereign-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8">
            Golden Visa <span className="gradient-text">Qualifying</span> Properties
          </h2>
          <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Invest AED 2 million or more in Abu Dhabi real estate and secure your 
            10-year UAE Golden Visa. We guide you through every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/properties?goldenVisa=true" className="btn-primary group">
              View Qualifying Properties
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/intelligence/golden-visa-guide" className="btn-glass">
              Download Guide
              <FileText className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="section-padding bg-gradient-to-b from-sovereign-black to-sovereign-charcoal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sovereign-gold/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="glass p-10 md:p-16 lg:p-20 glow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-sovereign-gold" />
                  <p className="text-sovereign-gold font-sans text-sm uppercase tracking-[0.4em]">
                    Get Started
                  </p>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                  Begin Your Investment Journey
                </h2>
                <p className="text-white/60 mb-10 leading-relaxed text-lg">
                  Schedule a private consultation with our advisory team. We&apos;ll discuss 
                  your investment objectives and help you navigate Abu Dhabi&apos;s 
                  dynamic property market with clarity.
                </p>
                <Link href="/enquire" className="btn-primary group">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="aspect-square relative glass overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                    alt="Advisory consultation"
                    fill
                    className="object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700"
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
