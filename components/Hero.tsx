// components/Hero.tsx
'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn')
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600 dark:from-purple-900 dark:to-pink-900 pt-20"
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slideInDown">
          Dev Moe Kyawaung
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slideInUp" style={{ animationDelay: '0.2s' }}>
          Full Stack Developer | Next.js Specialist | Web Innovator
        </p>
        <div className="flex gap-4 justify-center flex-wrap animate-slideInUp" style={{ animationDelay: '0.4s' }}>
          <Link
            href="#projects"
            className="px-8 py-3 bg-white text-purple-600 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-purple-600 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
