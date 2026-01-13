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
      className="group block card-glass overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sovereign-black via-transparent to-transparent opacity-60" />
        
        {property.goldenVisa && (
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-sovereign-gold/90 backdrop-blur-sm px-3 py-2">
            <Shield className="h-3.5 w-3.5 text-sovereign-black" />
            <span className="text-xs font-sans font-medium text-sovereign-black uppercase tracking-wider">
              Golden Visa
            </span>
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-xl border border-white/20 px-3 py-2">
          <span className="text-xs font-sans text-white uppercase tracking-wider">
            {property.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 bg-gradient-to-b from-white/5 to-transparent">
        <div className="flex items-center gap-2 text-white/50 text-xs mb-3">
          <MapPin className="h-3.5 w-3.5 text-sovereign-gold" />
          <span>{property.location}</span>
        </div>
        
        <h3 className="font-serif text-xl text-white mb-3 group-hover:text-sovereign-gold transition-colors duration-300">
          {property.title}
        </h3>
        
        <p className="font-serif text-2xl text-sovereign-gold mb-4">
          {formatAED(property.price)}
        </p>

        <div className="flex items-center gap-6 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-white/60">
            <Bed className="h-4 w-4 text-sovereign-gold/70" />
            <span className="text-sm">{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <Bath className="h-4 w-4 text-sovereign-gold/70" />
            <span className="text-sm">{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <Square className="h-4 w-4 text-sovereign-gold/70" />
            <span className="text-sm">{property.area.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
