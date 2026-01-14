'use client'

import { useState, useEffect } from 'react'

const words = [
  { text: 'Unleash', highlight: false },
  { text: 'your', highlight: false },
  { text: 'full', highlight: true },
  { text: 'Investment', highlight: true },
  { text: 'Potential', highlight: true },
  { text: 'with', highlight: false },
  { text: 'Premium', highlight: true },
  { text: 'Investments', highlight: true },
  { text: 'in', highlight: false },
  { text: 'Abu Dhabi', highlight: true },
]

export default function AnimatedHeroText() {
  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    const highlightableIndices = words
      .map((w, i) => (w.highlight ? i : -1))
      .filter((i) => i !== -1)

    let currentHighlight = 0
    
    const interval = setInterval(() => {
      setActiveIndex(highlightableIndices[currentHighlight])
      currentHighlight = (currentHighlight + 1) % highlightableIndices.length
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight text-center">
      {words.map((word, index) => (
        <span key={index}>
          <span
            className={`inline-block transition-all duration-700 ${
              activeIndex === index
                ? 'text-sovereign-gold scale-110 font-bold'
                : word.highlight
                ? 'text-white/90'
                : 'text-white/80'
            }`}
            style={{
              transform: activeIndex === index ? 'scale(1.1)' : 'scale(1)',
            }}
          >
            {word.text}
          </span>
          {index === 4 || index === 7 ? <br /> : ' '}
        </span>
      ))}
    </h1>
  )
}
