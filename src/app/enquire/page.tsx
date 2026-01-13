'use client'

import { useState } from 'react'
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react'

export default function EnquirePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    investmentGoal: '',
    budget: '',
    timeline: '',
    propertyType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen bg-sovereign-cream flex items-center justify-center">
        <div className="max-w-xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-sovereign-green mb-8">
            <CheckCircle className="h-10 w-10 text-sovereign-gold" />
          </div>
          <h1 className="font-serif text-4xl text-sovereign-charcoal mb-4">
            Thank You
          </h1>
          <p className="text-sovereign-gray-600 text-lg mb-8">
            Your enquiry has been received. A member of our advisory team will contact 
            you within 24 hours to discuss your investment objectives.
          </p>
          <a href="/" className="btn-dark">
            Return to Homepage
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen bg-sovereign-cream">
      {/* Header */}
      <section className="bg-sovereign-charcoal py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sovereign-gold font-sans text-sm uppercase tracking-[0.3em] mb-4">
              Schedule a Consultation
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-sovereign-white mb-6">
              Let&apos;s Discuss Your Investment Goals
            </h1>
            <p className="text-sovereign-gray-300 text-lg leading-relaxed">
              We take a considered approach to every client relationship. Share your 
              investment objectives and we&apos;ll arrange a private consultation with 
              one of our senior advisors.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-sovereign-charcoal p-8 sticky top-28">
                <h3 className="font-serif text-xl text-sovereign-white mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6 mb-8">
                  <a href="tel:+97124419000" className="flex items-start gap-4 text-sovereign-gray-300 hover:text-sovereign-gold transition-colors">
                    <Phone className="h-5 w-5 text-sovereign-gold mt-0.5" />
                    <div>
                      <p className="font-medium text-sovereign-white">Phone</p>
                      <p>+971 2 441 9000</p>
                    </div>
                  </a>
                  <a href="mailto:advisory@sovereigncapital.ae" className="flex items-start gap-4 text-sovereign-gray-300 hover:text-sovereign-gold transition-colors">
                    <Mail className="h-5 w-5 text-sovereign-gold mt-0.5" />
                    <div>
                      <p className="font-medium text-sovereign-white">Email</p>
                      <p>advisory@sovereigncapital.ae</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 text-sovereign-gray-300">
                    <MapPin className="h-5 w-5 text-sovereign-gold mt-0.5" />
                    <div>
                      <p className="font-medium text-sovereign-white">Office</p>
                      <p>Al Maryah Island<br />Abu Dhabi, UAE</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-sovereign-gray-700">
                  <p className="text-sovereign-gray-400 text-sm">
                    Office Hours<br />
                    Sunday - Thursday: 9:00 AM - 6:00 PM<br />
                    Saturday: By appointment only
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 border border-sovereign-gray-200">
                <h3 className="font-serif text-2xl text-sovereign-charcoal mb-2">
                  Investment Enquiry
                </h3>
                <p className="text-sovereign-gray-600 mb-8">
                  Please provide details about your investment objectives. This helps us 
                  prepare for our initial consultation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sovereign-gray-700 text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sovereign-gray-700 text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sovereign-gray-700 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sovereign-gray-700 text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="+971"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sovereign-gray-700 text-sm font-medium mb-2">
                    Primary Investment Goal *
                  </label>
                  <select
                    name="investmentGoal"
                    value={formData.investmentGoal}
                    onChange={handleChange}
                    required
                    className="select-field"
                  >
                    <option value="">Select your primary goal</option>
                    <option value="golden-visa">Golden Visa Qualification</option>
                    <option value="rental-income">Rental Income / Yield</option>
                    <option value="capital-appreciation">Capital Appreciation</option>
                    <option value="portfolio-diversification">Portfolio Diversification</option>
                    <option value="relocation">Personal Use / Relocation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sovereign-gray-700 text-sm font-medium mb-2">
                      Investment Budget (AED)
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="select-field"
                    >
                      <option value="">Select budget range</option>
                      <option value="1-2m">AED 1M - 2M</option>
                      <option value="2-5m">AED 2M - 5M (Golden Visa)</option>
                      <option value="5-10m">AED 5M - 10M</option>
                      <option value="10-20m">AED 10M - 20M</option>
                      <option value="20m+">AED 20M+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sovereign-gray-700 text-sm font-medium mb-2">
                      Investment Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="select-field"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (within 1 month)</option>
                      <option value="1-3m">1-3 months</option>
                      <option value="3-6m">3-6 months</option>
                      <option value="6-12m">6-12 months</option>
                      <option value="research">Still researching</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sovereign-gray-700 text-sm font-medium mb-2">
                    Preferred Property Type
                  </label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="select-field"
                  >
                    <option value="">Select property type</option>
                    <option value="apartment">Apartment</option>
                    <option value="penthouse">Penthouse</option>
                    <option value="villa">Villa</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="commercial">Commercial</option>
                    <option value="flexible">Flexible / Open to Advice</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label className="block text-sovereign-gray-700 text-sm font-medium mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Please share any specific requirements, preferred locations, or questions you may have..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full md:w-auto">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Enquiry
                </button>

                <p className="text-sovereign-gray-500 text-xs mt-6">
                  By submitting this form, you agree to our privacy policy. We respect 
                  your privacy and will never share your information with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
