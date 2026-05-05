// components/About.tsx
'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function About() {
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
    <section id="about" ref={ref} className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              <Image
                src="https://gravatar.com/avatar/moekyawaung2026?s=300&d=identicon"
                alt="Profile"
                fill
                className="rounded-full object-cover shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
            </div>
          </div>

          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate full-stack developer with expertise in modern web technologies.
              I specialize in building scalable, performant applications using Next.js, React, and Node.js.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              With a strong focus on clean code, best practices, and user experience,
              I create digital solutions that make a real impact.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full font-semibold hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
