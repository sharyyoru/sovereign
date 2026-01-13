import Image from 'next/image'
import Link from 'next/link'
import { Bed, Bath, Square, MapPin, Shield } from 'lucide-react'
import { formatAED } from '@/lib/utils'

interface Property {
  id: string
  title: string
  location: string
  price: number
  bedrooms: number
  bathrooms: number
  area: number
  image: string
  type: string
  goldenVisa?: boolean
}

interface PropertyCardProps {
  property: Property
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link 
      href={`/properties/${property.id}`}
      className="group block bg-white border border-sovereign-gray-100 card-hover"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {property.goldenVisa && (
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-sovereign-gold px-3 py-1.5">
            <Shield className="h-3.5 w-3.5 text-sovereign-black" />
            <span className="text-xs font-sans font-medium text-sovereign-black uppercase tracking-wider">
              Golden Visa
            </span>
          </div>
        )}
        <div className="absolute top-4 right-4 bg-sovereign-charcoal/90 px-3 py-1.5">
          <span className="text-xs font-sans text-sovereign-white uppercase tracking-wider">
            {property.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-sovereign-gray-500 text-xs mb-2">
          <MapPin className="h-3.5 w-3.5" />
          <span>{property.location}</span>
        </div>
        
        <h3 className="font-serif text-xl text-sovereign-charcoal mb-3 group-hover:text-sovereign-gold transition-colors">
          {property.title}
        </h3>
        
        <p className="font-serif text-2xl text-sovereign-gold mb-4">
          {formatAED(property.price)}
        </p>

        <div className="flex items-center gap-6 pt-4 border-t border-sovereign-gray-100">
          <div className="flex items-center gap-2 text-sovereign-gray-600">
            <Bed className="h-4 w-4" />
            <span className="text-sm">{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-2 text-sovereign-gray-600">
            <Bath className="h-4 w-4" />
            <span className="text-sm">{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-2 text-sovereign-gray-600">
            <Square className="h-4 w-4" />
            <span className="text-sm">{property.area.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
