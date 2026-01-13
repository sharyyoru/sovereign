import Link from 'next/link'
import { Filter, Search, MapPin } from 'lucide-react'
import PropertyCard from '@/components/properties/PropertyCard'

const properties = [
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
  {
    id: '4',
    title: 'Al Maryah Island Tower',
    location: 'Al Maryah Island, Abu Dhabi',
    price: 4800000,
    bedrooms: 3,
    bathrooms: 4,
    area: 3200,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    type: 'Apartment',
    goldenVisa: true,
  },
  {
    id: '5',
    title: 'Al Raha Gardens Villa',
    location: 'Al Raha Beach, Abu Dhabi',
    price: 6200000,
    bedrooms: 5,
    bathrooms: 6,
    area: 4800,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    type: 'Villa',
    goldenVisa: true,
  },
  {
    id: '6',
    title: 'Louvre View Apartment',
    location: 'Saadiyat Island, Abu Dhabi',
    price: 2400000,
    bedrooms: 2,
    bathrooms: 3,
    area: 1800,
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
    type: 'Apartment',
    goldenVisa: true,
  },
]

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-sovereign-charcoal">
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sovereign-gold font-sans text-sm uppercase tracking-[0.3em] mb-4">
              Curated Portfolio
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-sovereign-charcoal mb-6 uppercase tracking-wide">
              Abu Dhabi Properties
            </h1>
            <p className="text-sovereign-charcoal/60 text-lg leading-relaxed">
              Explore our carefully curated selection of premium Abu Dhabi properties. 
              Each listing has been vetted for investment potential and Golden Visa eligibility.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-[#f5f3ef] border-b border-sovereign-charcoal/10 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-sovereign-charcoal/40" />
              <input
                type="text"
                placeholder="Search properties..."
                className="w-full px-6 py-4 pl-12 bg-white border border-sovereign-charcoal/10 text-sovereign-charcoal placeholder:text-sovereign-charcoal/40 focus:outline-none focus:border-sovereign-gold transition-colors"
              />
            </div>
            <select className="px-6 py-4 bg-white border border-sovereign-charcoal/10 text-sovereign-charcoal focus:outline-none focus:border-sovereign-gold transition-colors md:w-48">
              <option value="">All Types</option>
              <option value="villa">Villa</option>
              <option value="apartment">Apartment</option>
              <option value="penthouse">Penthouse</option>
              <option value="townhouse">Townhouse</option>
            </select>
            <select className="px-6 py-4 bg-white border border-sovereign-charcoal/10 text-sovereign-charcoal focus:outline-none focus:border-sovereign-gold transition-colors md:w-48">
              <option value="">All Areas</option>
              <option value="saadiyat">Saadiyat Island</option>
              <option value="reem">Al Reem Island</option>
              <option value="yas">Yas Island</option>
              <option value="raha">Al Raha Beach</option>
              <option value="maryah">Al Maryah Island</option>
            </select>
            <select className="px-6 py-4 bg-white border border-sovereign-charcoal/10 text-sovereign-charcoal focus:outline-none focus:border-sovereign-gold transition-colors md:w-48">
              <option value="">Price Range</option>
              <option value="0-2000000">Under AED 2M</option>
              <option value="2000000-5000000">AED 2M - 5M</option>
              <option value="5000000-10000000">AED 5M - 10M</option>
              <option value="10000000+">Above AED 10M</option>
            </select>
            <button className="bg-sovereign-charcoal text-white px-6 py-4 flex items-center justify-center gap-2 hover:bg-sovereign-gold hover:text-sovereign-black transition-colors">
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>
        </div>
      </section>

      {/* Results Info */}
      <section className="py-6 border-b border-sovereign-charcoal/10 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sovereign-charcoal/60">
              Showing <span className="font-medium text-sovereign-charcoal">{properties.length}</span> properties
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-sovereign-charcoal/50">Sort by:</span>
              <select className="px-4 py-2 bg-white border border-sovereign-charcoal/10 text-sovereign-charcoal focus:outline-none focus:border-sovereign-gold transition-colors w-48">
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid - Dark Background */}
      <section className="py-16 md:py-24 bg-sovereign-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="border border-sovereign-gold text-sovereign-gold px-8 py-4 text-sm uppercase tracking-wider hover:bg-sovereign-gold hover:text-sovereign-black transition-colors">
              Load More Properties
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sovereign-black py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 uppercase tracking-wide">
            Looking for Something Specific?
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            Our advisory team can source properties that match your exact requirements, 
            including off-market opportunities.
          </p>
          <Link 
            href="/enquire" 
            className="inline-flex items-center gap-2 bg-sovereign-gold text-sovereign-black px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-white transition-colors"
          >
            Speak with an Advisor
          </Link>
        </div>
      </section>
    </div>
  )
}
