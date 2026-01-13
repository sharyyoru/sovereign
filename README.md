# Sovereign Capital - Abu Dhabi Real Estate Advisory

A premium Next.js website for Sovereign Capital, a real estate advisory firm specializing in Abu Dhabi properties for sophisticated investors.

## Features

- **Dynamic Property Engine**: Server-rendered property listings with filtering
- **Yield & ROI Calculator**: Interactive investment calculator with area-specific yields
- **Intelligence Hub**: Market reports, investment guides, and decision files
- **Area Guides**: Detailed neighbourhood stories for Abu Dhabi's prime locations
- **Lead Filtration Forms**: High-quality enquiry forms focused on investment goals
- **Mobile Responsive**: Fully optimized for all device sizes
- **Editorial Design**: Clean, regal aesthetic with gold accents

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Typography**: Cormorant Garamond (serif) + Inter (sans)
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── about/          # About page
│   ├── areas/          # Area guides
│   ├── calculator/     # ROI Calculator
│   ├── enquire/        # Contact form
│   ├── intelligence/   # Market reports
│   ├── properties/     # Property listings
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/
│   ├── calculator/     # Calculator components
│   ├── layout/         # Header, Footer
│   └── properties/     # Property cards
├── lib/
│   └── utils.ts        # Utility functions
└── public/
    └── logos/          # Brand assets
```

## Brand Colors

- **Charcoal**: #1a1a1a
- **Gold**: #c9a962
- **Green**: #2d4a3e
- **Cream**: #f5f3ef

## Key Pages

- `/` - Homepage with hero, featured properties, and value propositions
- `/properties` - Property listings with filtering
- `/calculator` - Interactive yield and ROI calculator
- `/intelligence` - Market reports and decision files
- `/areas` - Abu Dhabi neighbourhood guides
- `/about` - Company philosophy and team
- `/enquire` - Investment consultation form

## License

Private - Sovereign Capital
