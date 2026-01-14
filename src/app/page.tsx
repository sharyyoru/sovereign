import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Shield, FileText, Calculator } from 'lucide-react'
import PropertySlider from '@/components/home/PropertySlider'
import ServiceScroller from '@/components/home/ServiceScroller'
import CaseStudies from '@/components/home/CaseStudies'

export default function HomePage() {
  return (
    <div className="page-transition">
      {/* Hero Section - YouTube Video Background */}
      <section className="relative min-h-screen flex items-center bg-sovereign-black overflow-hidden">
        {/* YouTube Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/_5CSitKheXQ?autoplay=1&mute=1&loop=1&playlist=_5CSitKheXQ&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1&disablekb=1"
            title="Background Video"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vh] min-w-[100vw] min-h-[100vh] pointer-events-none"
            style={{ aspectRatio: '16/9' }}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
        
        {/* Color Filter Overlay - Green & Gold */}
        <div className="absolute inset-0 bg-gradient-to-b from-sovereign-green/80 via-sovereign-green/60 to-sovereign-black/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-sovereign-gold/10 via-transparent to-sovereign-gold/10 z-10" />
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
              <div className="w-1 h-4 bg-white/50 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Property Slider - G42 News Style - Overlapping with hero, asymmetric layout */}
      <div className="relative -mt-48 z-20 ml-[5%] md:ml-[20%] lg:ml-[40%]">
        <PropertySlider />
      </div>

      {/* About Section - G42 Style */}
      <section className="py-20 lg:py-32 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - About Text */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-sovereign-charcoal mb-12 uppercase tracking-wide">
                About Sovereign
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-sovereign-charcoal/70 leading-relaxed mb-6">
                    We&apos;re Sovereign Capital — born in Abu Dhabi, building portfolios globally, and pushing real estate advisory to do more for everyone.
                  </p>
                  <p className="text-sovereign-charcoal/70 leading-relaxed">
                    We see strategic investment as a force for good. A partner to wealth creation. A tool to make lives more secure, journeys safer, and the future more connected.
                  </p>
                </div>
                <div>
                  <p className="text-sovereign-charcoal/70 leading-relaxed mb-6">
                    From securing Golden Visas to exploring premium properties, we&apos;re not waiting for tomorrow. We&apos;re creating it — with partners, with purpose, and with people in mind.
                  </p>
                  <p className="text-sovereign-charcoal/70 leading-relaxed">
                    At Sovereign, progress is personal. And every day is a chance to invest better.
                  </p>
                </div>
              </div>
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 bg-sovereign-gold text-sovereign-black px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-sovereign-charcoal hover:text-white transition-colors mt-8"
              >
                About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Column - YouTube Video Background Style */}
            <div className="relative">
              <div className="aspect-video relative overflow-hidden rounded-lg shadow-xl">
                <iframe
                  src="https://www.youtube.com/embed/cqcHd1CVMgw?autoplay=1&mute=1&loop=1&playlist=cqcHd1CVMgw&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&disablekb=1"
                  title="About Sovereign Capital"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  allow="autoplay; encrypted-media"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-5xl md:text-6xl font-serif text-sovereign-charcoal mb-2">AED 2B+</p>
              <p className="text-sovereign-charcoal/50 uppercase text-sm tracking-wider">Transactions Advised</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-serif text-sovereign-charcoal mb-2">200+</p>
              <p className="text-sovereign-charcoal/50 uppercase text-sm tracking-wider">Golden Visas Secured</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-serif text-sovereign-charcoal mb-2">7.2%</p>
              <p className="text-sovereign-charcoal/50 uppercase text-sm tracking-wider">Avg. Rental Yield</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-serif text-sovereign-charcoal mb-2">15+</p>
              <p className="text-sovereign-charcoal/50 uppercase text-sm tracking-wider">Years Experience</p>
            </div>
          </div>

          <p className="mt-12 text-sovereign-charcoal/60 max-w-2xl">
            Our strength lies in our expertise. Diverse, driven, and deeply skilled — we&apos;re the force powering your investment success.
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <CaseStudies />

      {/* What We Do - Horizontal Scroller */}
      <ServiceScroller />

      {/* Golden Visa CTA */}
      <section className="py-20 lg:py-32 bg-sovereign-charcoal relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sovereign-gold/10 rounded-full blur-3xl animate-pulse-slow" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-sovereign-gold/10 border border-sovereign-gold/30 mb-10 animate-float">
            <Shield className="h-12 w-12 text-sovereign-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8 uppercase tracking-wide">
            Golden Visa Qualifying Properties
          </h2>
          <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Invest AED 2 million or more in Abu Dhabi real estate and secure your 
            10-year UAE Golden Visa. We guide you through every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/properties?goldenVisa=true" 
              className="inline-flex items-center gap-2 bg-sovereign-gold text-sovereign-black px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-white transition-colors"
            >
              View Qualifying Properties
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/intelligence/golden-visa-guide" 
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Download Guide
              <FileText className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Calculator Preview */}
      <section className="py-20 lg:py-32 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-sovereign-charcoal mb-6 uppercase tracking-wide">
                Yield & ROI Calculator
              </h2>
              <p className="text-sovereign-charcoal/60 mb-10 leading-relaxed text-lg">
                Our high-precision calculator helps you understand potential returns 
                based on Abu Dhabi&apos;s specific market dynamics.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 bg-white p-4 border border-sovereign-charcoal/10">
                  <div className="w-3 h-3 bg-sovereign-gold rounded-full" />
                  <span className="text-sovereign-charcoal/80">Golden Visa AED 2M threshold analysis</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 border border-sovereign-charcoal/10">
                  <div className="w-3 h-3 bg-sovereign-gold rounded-full" />
                  <span className="text-sovereign-charcoal/80">Area-specific rental yield data</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 border border-sovereign-charcoal/10">
                  <div className="w-3 h-3 bg-sovereign-gold rounded-full" />
                  <span className="text-sovereign-charcoal/80">5-year appreciation projections</span>
                </div>
              </div>
              <Link 
                href="/calculator" 
                className="inline-flex items-center gap-2 bg-sovereign-charcoal text-white px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-sovereign-gold hover:text-sovereign-black transition-colors"
              >
                <Calculator className="w-4 h-4" />
                Open Calculator
              </Link>
            </div>
            <div className="relative aspect-square bg-sovereign-charcoal p-8 flex items-center justify-center">
              <div className="text-center">
                <p className="text-sovereign-gold text-6xl font-serif mb-4">7.2%</p>
                <p className="text-white/60 uppercase tracking-wider text-sm">Average Yield</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 lg:py-32 bg-sovereign-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sovereign-gold/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sovereign-gold text-sm uppercase tracking-widest mb-4">Get Started</p>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 uppercase tracking-wide">
                Begin Your Investment Journey
              </h2>
              <p className="text-white/60 mb-10 leading-relaxed text-lg">
                Schedule a private consultation with our advisory team. We&apos;ll discuss 
                your investment objectives and help you navigate Abu Dhabi&apos;s 
                dynamic property market with clarity.
              </p>
              <Link 
                href="/enquire" 
                className="inline-flex items-center gap-2 bg-sovereign-gold text-sovereign-black px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-white transition-colors"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-square relative overflow-hidden">
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
      </section>
    </div>
  )
}
