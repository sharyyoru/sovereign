import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Bed, Bath, Square, MapPin, Shield, Share2, Heart, Calculator, Phone, Mail } from 'lucide-react'
import { formatAED } from '@/lib/utils'

const properties: Record<string, {
  id: string
  title: string
  location: string
  area_name: string
  price: number
  bedrooms: number
  bathrooms: number
  sqft: number
  image: string
  images: string[]
  type: string
  goldenVisa: boolean
  description: string
  features: string[]
  yield: number
}> = {
  '1': {
    id: '1',
    title: 'Al Reem Island Penthouse',
    location: 'Al Reem Island, Abu Dhabi',
    area_name: 'Al Reem Island',
    price: 8500000,
    bedrooms: 4,
    bathrooms: 5,
    sqft: 5200,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    ],
    type: 'Penthouse',
    goldenVisa: true,
    description: 'This exceptional penthouse offers panoramic views of the Abu Dhabi skyline and Arabian Gulf. Featuring floor-to-ceiling windows, premium finishes throughout, and a private rooftop terrace, this residence represents the pinnacle of luxury living in one of Abu Dhabi\'s most prestigious addresses.',
    features: ['Private Pool', 'Rooftop Terrace', 'Smart Home System', 'Private Elevator', 'Maid\'s Room', 'Built-in Wardrobes', 'Central A/C', 'Covered Parking'],
    yield: 6.8,
  },
  '2': {
    id: '2',
    title: 'Saadiyat Beach Villa',
    location: 'Saadiyat Island, Abu Dhabi',
    area_name: 'Saadiyat Island',
    price: 15000000,
    bedrooms: 6,
    bathrooms: 7,
    sqft: 8500,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    ],
    type: 'Villa',
    goldenVisa: true,
    description: 'An extraordinary beachfront villa on Saadiyat Island, steps away from the pristine white sand beach. This architectural masterpiece features expansive living spaces, a private infinity pool, and direct beach access. Located in close proximity to the Louvre Abu Dhabi.',
    features: ['Beach Access', 'Private Pool', 'Garden', 'Smart Home', 'Driver\'s Room', 'Maid\'s Room', 'Home Cinema', 'Wine Cellar'],
    yield: 5.2,
  },
  '3': {
    id: '3',
    title: 'Yas Bay Residence',
    location: 'Yas Island, Abu Dhabi',
    area_name: 'Yas Island',
    price: 3200000,
    bedrooms: 3,
    bathrooms: 4,
    sqft: 2800,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80',
    ],
    type: 'Apartment',
    goldenVisa: true,
    description: 'A stunning waterfront apartment in Yas Bay, offering breathtaking views of the marina and Yas Island attractions. This contemporary residence features an open-plan design, premium kitchen appliances, and access to world-class amenities including pools, gyms, and direct marina access.',
    features: ['Marina Views', 'Balcony', 'Built-in Kitchen', 'Gym Access', 'Swimming Pool', 'Concierge Service', 'Parking', 'Storage'],
    yield: 7.5,
  },
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = properties[params.id]

  if (!property) {
    return (
      <div className="min-h-screen bg-[#f5f3ef] flex items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-sovereign-charcoal mb-4">Property Not Found</h1>
          <Link href="/properties" className="text-sovereign-gold hover:underline">
            Back to Properties
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f5f3ef]">
      {/* Back Navigation */}
      <div className="pt-32 pb-6 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link 
            href="/properties" 
            className="inline-flex items-center gap-2 text-sovereign-charcoal/60 hover:text-sovereign-charcoal transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Properties
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative h-[50vh] md:h-[60vh] bg-sovereign-charcoal">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sovereign-black/60 via-transparent to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-6 left-6 flex gap-3">
          {property.goldenVisa && (
            <div className="flex items-center gap-2 bg-sovereign-gold px-4 py-2">
              <Shield className="h-4 w-4 text-sovereign-black" />
              <span className="text-sm font-medium text-sovereign-black uppercase tracking-wider">
                Golden Visa Eligible
              </span>
            </div>
          )}
          <div className="bg-sovereign-charcoal/90 px-4 py-2">
            <span className="text-sm text-white uppercase tracking-wider">
              {property.type}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="absolute top-6 right-6 flex gap-3">
          <button className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Title & Location */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-sovereign-charcoal/60 text-sm mb-3">
                  <MapPin className="w-4 h-4 text-sovereign-gold" />
                  <span>{property.location}</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-sovereign-charcoal mb-4 uppercase tracking-wide">
                  {property.title}
                </h1>
                <p className="text-4xl font-serif text-sovereign-gold">
                  {formatAED(property.price)}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 p-6 bg-sovereign-charcoal mb-8">
                <div className="text-center">
                  <Bed className="w-6 h-6 text-sovereign-gold mx-auto mb-2" />
                  <p className="text-2xl text-white font-serif">{property.bedrooms}</p>
                  <p className="text-white/50 text-sm">Bedrooms</p>
                </div>
                <div className="text-center">
                  <Bath className="w-6 h-6 text-sovereign-gold mx-auto mb-2" />
                  <p className="text-2xl text-white font-serif">{property.bathrooms}</p>
                  <p className="text-white/50 text-sm">Bathrooms</p>
                </div>
                <div className="text-center">
                  <Square className="w-6 h-6 text-sovereign-gold mx-auto mb-2" />
                  <p className="text-2xl text-white font-serif">{property.sqft.toLocaleString()}</p>
                  <p className="text-white/50 text-sm">Sq. Ft.</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-serif text-sovereign-charcoal mb-4 uppercase tracking-wide">
                  About This Property
                </h2>
                <p className="text-sovereign-charcoal/70 leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="text-2xl font-serif text-sovereign-charcoal mb-4 uppercase tracking-wide">
                  Features & Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {property.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 p-3 bg-white border border-sovereign-charcoal/10">
                      <div className="w-2 h-2 bg-sovereign-gold rounded-full" />
                      <span className="text-sovereign-charcoal/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div>
                <h2 className="text-2xl font-serif text-sovereign-charcoal mb-4 uppercase tracking-wide">
                  Gallery
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {property.images.map((img, index) => (
                    <div key={index} className="aspect-square relative overflow-hidden">
                      <Image
                        src={img}
                        alt={`${property.title} - Image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* Investment Card */}
                <div className="bg-sovereign-charcoal p-6">
                  <h3 className="text-lg font-serif text-white mb-4 uppercase tracking-wide">
                    Investment Overview
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-white/60">Expected Yield</span>
                      <span className="text-sovereign-gold text-xl font-serif">{property.yield}%</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-white/60">Annual Rental</span>
                      <span className="text-white font-serif">{formatAED(property.price * (property.yield / 100))}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Price/Sq.Ft</span>
                      <span className="text-white font-serif">{formatAED(Math.round(property.price / property.sqft))}</span>
                    </div>
                  </div>
                  <Link 
                    href="/calculator" 
                    className="flex items-center justify-center gap-2 w-full mt-6 bg-sovereign-gold text-sovereign-black px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-white transition-colors"
                  >
                    <Calculator className="w-4 h-4" />
                    Calculate ROI
                  </Link>
                </div>

                {/* Contact Card */}
                <div className="bg-white border border-sovereign-charcoal/10 p-6">
                  <h3 className="text-lg font-serif text-sovereign-charcoal mb-4 uppercase tracking-wide">
                    Interested in This Property?
                  </h3>
                  <p className="text-sovereign-charcoal/60 text-sm mb-6">
                    Speak with our advisory team to arrange a viewing or learn more about this investment opportunity.
                  </p>
                  <div className="space-y-3 mb-6">
                    <a href="tel:+97124419000" className="flex items-center gap-3 text-sovereign-charcoal hover:text-sovereign-gold transition-colors">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">+971 2 441 9000</span>
                    </a>
                    <a href="mailto:advisory@sovereigncapital.ae" className="flex items-center gap-3 text-sovereign-charcoal hover:text-sovereign-gold transition-colors">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">advisory@sovereigncapital.ae</span>
                    </a>
                  </div>
                  <Link 
                    href="/enquire" 
                    className="block w-full text-center bg-sovereign-charcoal text-white px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-sovereign-gold hover:text-sovereign-black transition-colors"
                  >
                    Schedule Viewing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
