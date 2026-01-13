import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Home, Users } from 'lucide-react'

const areas = [
  {
    name: 'Saadiyat Island',
    slug: 'saadiyat-island',
    tagline: 'Cultural Heart of Abu Dhabi',
    description: 'Home to the Louvre Abu Dhabi and upcoming Guggenheim, Saadiyat offers unparalleled cultural capital alongside pristine beaches.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
    stats: {
      avgPrice: 'AED 2,800/sqft',
      yield: '5.8%',
      appreciation: '+6.2% YoY',
    },
    highlights: ['Louvre Abu Dhabi', 'Natural beaches', 'Low-density living', 'Golf courses'],
  },
  {
    name: 'Al Reem Island',
    slug: 'al-reem-island',
    tagline: 'Urban Investment Hub',
    description: 'A dynamic island community with strong rental demand, excellent connectivity, and diverse property options.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    stats: {
      avgPrice: 'AED 1,400/sqft',
      yield: '7.2%',
      appreciation: '+5.5% YoY',
    },
    highlights: ['High rental demand', 'Metro connectivity', 'Mixed-use communities', 'Waterfront living'],
  },
  {
    name: 'Yas Island',
    slug: 'yas-island',
    tagline: 'Entertainment & Lifestyle',
    description: 'Home to Ferrari World, Yas Marina Circuit, and Warner Bros World—a destination for lifestyle-focused investors.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
    stats: {
      avgPrice: 'AED 1,600/sqft',
      yield: '6.5%',
      appreciation: '+5.8% YoY',
    },
    highlights: ['World-class entertainment', 'Beach access', 'F1 circuit', 'Growing community'],
  },
  {
    name: 'Al Maryah Island',
    slug: 'al-maryah-island',
    tagline: 'Financial District',
    description: 'Abu Dhabi\'s premier business district with luxury retail at The Galleria and Cleveland Clinic Abu Dhabi.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    stats: {
      avgPrice: 'AED 2,200/sqft',
      yield: '5.5%',
      appreciation: '+6.5% YoY',
    },
    highlights: ['ADGM financial zone', 'Luxury retail', 'Premium dining', 'Healthcare hub'],
  },
  {
    name: 'Al Raha Beach',
    slug: 'al-raha-beach',
    tagline: 'Waterfront Community',
    description: 'Established beachfront community with excellent amenities, family-friendly environment, and airport proximity.',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
    stats: {
      avgPrice: 'AED 1,300/sqft',
      yield: '6.8%',
      appreciation: '+4.5% YoY',
    },
    highlights: ['Beach access', 'Airport proximity', 'Established community', 'Family-focused'],
  },
  {
    name: 'Khalifa City',
    slug: 'khalifa-city',
    tagline: 'Suburban Value',
    description: 'Spacious villa communities offering excellent value, strong yields, and proximity to major employment hubs.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    stats: {
      avgPrice: 'AED 900/sqft',
      yield: '7.5%',
      appreciation: '+4.0% YoY',
    },
    highlights: ['Villa communities', 'Strong yields', 'Masdar City proximity', 'International schools'],
  },
]

export default function AreasPage() {
  return (
    <div className="pt-20 min-h-screen bg-sovereign-cream">
      {/* Header */}
      <section className="bg-sovereign-charcoal py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sovereign-gold font-sans text-sm uppercase tracking-[0.3em] mb-4">
              Neighbourhood Stories
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-sovereign-white mb-6">
              Abu Dhabi Areas
            </h1>
            <p className="text-sovereign-gray-300 text-lg leading-relaxed">
              Each area of Abu Dhabi tells a different story. We help you find the 
              neighbourhood that aligns with your investment strategy and lifestyle preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {areas.map((area, index) => (
              <div 
                key={area.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative aspect-[4/3] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={area.image}
                    alt={area.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sovereign-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-sovereign-charcoal/90 p-4 text-center">
                        <p className="text-sovereign-gold text-lg font-serif">{area.stats.avgPrice}</p>
                        <p className="text-sovereign-gray-400 text-xs uppercase tracking-wider">Avg Price</p>
                      </div>
                      <div className="bg-sovereign-charcoal/90 p-4 text-center">
                        <p className="text-sovereign-gold text-lg font-serif">{area.stats.yield}</p>
                        <p className="text-sovereign-gray-400 text-xs uppercase tracking-wider">Yield</p>
                      </div>
                      <div className="bg-sovereign-charcoal/90 p-4 text-center">
                        <p className="text-sovereign-gold text-lg font-serif">{area.stats.appreciation}</p>
                        <p className="text-sovereign-gray-400 text-xs uppercase tracking-wider">Growth</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <p className="text-sovereign-gold font-sans text-sm uppercase tracking-[0.3em] mb-2">
                    {area.tagline}
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl text-sovereign-charcoal mb-4">
                    {area.name}
                  </h2>
                  <p className="text-sovereign-gray-600 leading-relaxed mb-6">
                    {area.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {area.highlights.map((highlight) => (
                      <span 
                        key={highlight}
                        className="px-4 py-2 bg-sovereign-gray-100 text-sovereign-gray-700 text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href={`/areas/${area.slug}`}
                      className="btn-dark"
                    >
                      Explore {area.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link 
                      href={`/properties?area=${area.slug}`}
                      className="btn-secondary"
                    >
                      View Properties
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sovereign-charcoal py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-sovereign-white mb-6">
            Not Sure Which Area Suits You?
          </h2>
          <p className="text-sovereign-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Our advisors can help match your investment criteria with the ideal 
            Abu Dhabi neighbourhood. Let&apos;s find your perfect location.
          </p>
          <Link href="/enquire" className="btn-primary">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
