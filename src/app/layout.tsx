import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Sovereign Capital | Abu Dhabi Real Estate Advisory',
  description: 'Premier real estate advisory for sophisticated investors seeking Abu Dhabi properties. Expert guidance on Golden Visa investments, luxury properties, and strategic portfolio diversification.',
  keywords: 'Abu Dhabi real estate, Golden Visa UAE, luxury property investment, AED 2 million investment, UAE property advisory',
  openGraph: {
    title: 'Sovereign Capital | Abu Dhabi Real Estate Advisory',
    description: 'Premier real estate advisory for sophisticated investors seeking Abu Dhabi properties.',
    type: 'website',
    locale: 'en_AE',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
