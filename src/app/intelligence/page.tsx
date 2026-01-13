import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Download, FileText, TrendingUp, MapPin, Calendar } from 'lucide-react'

const reports = [
  {
    title: 'Abu Dhabi 2030 Economic Vision',
    category: 'Market Intelligence',
    description: 'Understanding how the emirate\'s strategic plan impacts property values and investment opportunities across key sectors.',
    date: 'Q4 2025',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    href: '/intelligence/abu-dhabi-2030',
    featured: true,
  },
  {
    title: 'Golden Visa Investment Guide',
    category: 'Investment Guide',
    description: 'Complete analysis of the AED 2M threshold and what it means for international investors seeking UAE residency.',
    date: 'Updated 2025',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80',
    href: '/intelligence/golden-visa-guide',
    featured: true,
  },
  {
    title: 'Q4 2025 Market Report',
    category: 'Market Report',
    description: 'Quarterly analysis of Abu Dhabi property performance, yields, and emerging trends across residential segments.',
    date: 'December 2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    href: '/intelligence/q4-2025-report',
    featured: false,
  },
  {
    title: 'Rental Yield Analysis by Area',
    category: 'Yield Report',
    description: 'Comprehensive breakdown of rental yields across Abu Dhabi\'s prime locations with 5-year historical data.',
    date: 'November 2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    href: '/intelligence/yield-analysis',
    featured: false,
  },
]

const decisionFiles = [
  {
    title: 'The London Family Office',
    summary: 'How a UK-based family office restructured their portfolio with AED 15M across three Abu Dhabi assets.',
    wanted: 'Capital preservation with Golden Visa benefits for family members',
    ignored: 'Off-plan projects despite attractive payment plans',
    outcome: 'Three ready properties in established areas with 6.2% combined yield',
  },
  {
    title: 'The Tech Entrepreneur',
    summary: 'A Singapore-based tech founder seeking diversification outside Asian markets.',
    wanted: 'High growth potential in emerging areas',
    ignored: 'Established communities with proven rental demand',
    outcome: 'Saadiyat Island villa with 40% appreciation in 3 years',
  },
]

export default function IntelligencePage() {
  return (
    <div className="pt-20 min-h-screen bg-sovereign-cream">
      {/* Header */}
      <section className="bg-sovereign-charcoal py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sovereign-gold font-sans text-sm uppercase tracking-[0.3em] mb-4">
              Market Intelligence
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-sovereign-white mb-6">
              Insights & Analysis
            </h1>
            <p className="text-sovereign-gray-300 text-lg leading-relaxed">
              Proprietary research and analysis to inform your Abu Dhabi investment decisions. 
              Our intelligence is built on deep market access and years of transaction experience.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Reports */}
      <section className="section-padding bg-sovereign-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-sovereign-gold font-sans text-sm uppercase tracking-[0.3em] mb-4">
              Featured
            </p>
            <h2 className="font-serif text-3xl text-sovereign-charcoal">
              Essential Reading
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {reports.filter(r => r.featured).map((report) => (
              <Link 
                key={report.title}
                href={report.href}
                className="group relative overflow-hidden bg-sovereign-charcoal"
              >
                <div className="aspect-[16/9] relative">
                  <Image
                    src={report.image}
                    alt={report.title}
                    fill
                    className="object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                  />
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <p className="text-sovereign-gold font-sans text-xs uppercase tracking-widest mb-2">
                    {report.category}
                  </p>
                  <h3 className="font-serif text-2xl text-sovereign-white mb-3 group-hover:text-sovereign-gold transition-colors">
                    {report.title}
                  </h3>
                  <p className="text-sovereign-gray-300 text-sm mb-4 line-clamp-2">
                    {report.description}
                  </p>
                  <span className="inline-flex items-center text-sovereign-gold font-sans text-xs uppercase tracking-widest">
                    Read Report
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Reports */}
      <section className="section-padding bg-sovereign-cream">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-serif text-3xl text-sovereign-charcoal">
              Reports & Guides
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reports.map((report) => (
              <Link 
                key={report.title}
                href={report.href}
                className="group bg-white border border-sovereign-gray-200 p-6 card-hover flex gap-6"
              >
                <div className="w-24 h-24 relative flex-shrink-0">
                  <Image
                    src={report.image}
                    alt={report.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <p className="text-sovereign-gold font-sans text-xs uppercase tracking-widest">
                      {report.category}
                    </p>
                    <span className="text-sovereign-gray-400 text-xs flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {report.date}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-sovereign-charcoal mb-2 group-hover:text-sovereign-gold transition-colors">
                    {report.title}
                  </h3>
                  <p className="text-sovereign-gray-600 text-sm line-clamp-2">
                    {report.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Files */}
      <section className="section-padding bg-sovereign-green" id="decisions">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-sovereign-gold font-sans text-sm uppercase tracking-[0.3em] mb-4">
              The Decision Files
            </p>
            <h2 className="font-serif text-3xl text-sovereign-white mb-4">
              Real Client Decisions
            </h2>
            <p className="text-sovereign-gray-300 max-w-2xl">
              Monthly deep dives into actual client investment decisions—what they prioritized, 
              what they chose to ignore, and why.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {decisionFiles.map((file) => (
              <div 
                key={file.title}
                className="bg-sovereign-charcoal p-8 border border-sovereign-gray-700"
              >
                <h3 className="font-serif text-xl text-sovereign-white mb-4">
                  {file.title}
                </h3>
                <p className="text-sovereign-gray-300 mb-6">
                  {file.summary}
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-xs text-sovereign-gold uppercase tracking-wider">Wanted</span>
                    </div>
                    <p className="text-sovereign-gray-400 text-sm">{file.wanted}</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-xs text-sovereign-gray-500 uppercase tracking-wider">Ignored</span>
                    </div>
                    <p className="text-sovereign-gray-400 text-sm">{file.ignored}</p>
                  </div>
                  <div className="flex gap-4 pt-4 border-t border-sovereign-gray-700">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-xs text-sovereign-gold uppercase tracking-wider">Outcome</span>
                    </div>
                    <p className="text-sovereign-white text-sm">{file.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="section-padding bg-sovereign-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-sovereign-charcoal mb-6">
            <Download className="h-8 w-8 text-sovereign-gold" />
          </div>
          <h2 className="font-serif text-3xl text-sovereign-charcoal mb-4">
            Download Our Investment Guide
          </h2>
          <p className="text-sovereign-gray-600 mb-8 max-w-2xl mx-auto">
            Get our comprehensive guide to Abu Dhabi property investment, including 
            Golden Visa requirements, area analysis, and yield projections.
          </p>
          <button className="btn-dark">
            <FileText className="mr-2 h-4 w-4" />
            Request Guide
          </button>
        </div>
      </section>
    </div>
  )
}
