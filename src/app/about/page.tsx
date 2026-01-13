import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, Users, Target, Globe } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Advice-First',
    description: 'We prioritize understanding your goals before presenting solutions. Our success is measured by your informed decisions, not transaction volume.',
  },
  {
    icon: Award,
    title: 'Domain Expertise',
    description: 'Deep specialization in Abu Dhabi real estate means nuanced advice that generalist agents simply cannot provide.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'We understand international investors because we serve them daily. Currency considerations, visa pathways, and cross-border implications are our expertise.',
  },
  {
    icon: Users,
    title: 'Long-Term Relationships',
    description: 'We build partnerships that extend beyond single transactions. Many clients return for portfolio expansion years after their initial investment.',
  },
]

const team = [
  {
    name: 'James Wilson',
    role: 'Founder & Principal Advisor',
    bio: 'Former investment banker with 15 years in UAE property markets. Advises HNW individuals and family offices on strategic property allocation.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Sarah Al-Rashid',
    role: 'Senior Investment Advisor',
    bio: 'Specialist in Golden Visa qualifying investments. Has guided over 200 families through the visa qualification process.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'Market Intelligence Lead',
    bio: 'Former analyst at a leading UAE property consultancy. Produces our proprietary market reports and yield analysis.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen bg-sovereign-cream">
      {/* Hero */}
      <section className="relative bg-sovereign-charcoal py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Abu Dhabi Architecture"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sovereign-gold font-sans text-sm uppercase tracking-[0.3em] mb-4">
              Our Philosophy
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-sovereign-white mb-6">
              Decisions Driven by Understanding
            </h1>
            <p className="text-sovereign-gray-300 text-lg md:text-xl leading-relaxed">
              In a market often characterized by hype and pressure, we offer something 
              different: measured counsel grounded in deep expertise and genuine 
              understanding of your investment objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Statement */}
      <section className="section-padding bg-sovereign-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sovereign-gold font-sans text-sm uppercase tracking-[0.3em] mb-4">
              From Our Founder
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-sovereign-charcoal">
              Why Abu Dhabi
            </h2>
          </div>
          
          <div className="prose prose-lg mx-auto">
            <blockquote className="border-l-4 border-sovereign-gold pl-6 italic text-sovereign-gray-700 text-xl leading-relaxed">
              &ldquo;I founded Sovereign Capital because I witnessed too many investors 
              making decisions based on incomplete information or high-pressure sales 
              tactics. Abu Dhabi offers genuine opportunity—but only for those who 
              approach it with proper understanding.
              <br /><br />
              Our role is not to sell properties. It&apos;s to ensure every client makes 
              decisions aligned with their true objectives, whether that&apos;s Golden Visa 
              qualification, yield optimization, or long-term capital growth.&rdquo;
            </blockquote>
            <p className="text-sovereign-charcoal font-medium mt-8 text-right">
              — James Wilson, Founder
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-sovereign-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sovereign-gold font-sans text-sm uppercase tracking-[0.3em] mb-4">
              Our Approach
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-sovereign-charcoal">
              Calm. Confident. Considered.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div 
                key={value.title}
                className="bg-white p-8 border border-sovereign-gray-200 card-hover"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-sovereign-charcoal mb-6">
                  <value.icon className="h-6 w-6 text-sovereign-gold" />
                </div>
                <h3 className="font-serif text-xl text-sovereign-charcoal mb-4">
                  {value.title}
                </h3>
                <p className="text-sovereign-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-sovereign-white" id="team">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sovereign-gold font-sans text-sm uppercase tracking-[0.3em] mb-4">
              Advisory Team
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-sovereign-charcoal">
              Your Partners in Investment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="font-serif text-xl text-sovereign-charcoal mb-1">
                  {member.name}
                </h3>
                <p className="text-sovereign-gold text-sm uppercase tracking-wider mb-4">
                  {member.role}
                </p>
                <p className="text-sovereign-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sovereign-green py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-sovereign-white mb-6">
            Ready to Begin?
          </h2>
          <p className="text-sovereign-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a private consultation with our advisory team. We&apos;ll discuss 
            your objectives and determine if we&apos;re the right fit for your investment journey.
          </p>
          <Link href="/enquire" className="btn-primary">
            Schedule Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
