// components/Projects.tsx
'use client'

import { useEffect, useRef } from 'react'

const projects = [
  {
    icon: '🛒',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with Next.js, Stripe integration, and real-time inventory'
  },
  {
    icon: '💬',
    title: 'Real-time Chat App',
    description: 'WebSocket-based messaging platform with user authentication and group chats'
  },
  {
    icon: '✓',
    title: 'Task Management',
    description: 'Collaborative project management tool with drag-and-drop functionality'
  },
  {
    icon: '📊',
    title: 'Analytics Dashboard',
    description: 'Data visualization dashboard with real-time analytics and interactive charts'
  },
  {
    icon: '🎬',
    title: 'Video Streaming',
    description: 'Streaming platform with content management and personalized recommendations'
  },
  {
    icon: '🏥',
    title: 'Healthcare System',
    description: 'Medical appointment booking and patient record management system'
  }
]

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.project-card').forEach((el, idx) => {
            setTimeout(() => {
              el.classList.add('animate-fadeIn')
            }, idx * 100)
          })
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
    <section id="projects" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="project-card bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer opacity-0"
            >
              <div className="text-5xl mb-4 animate-bounce" style={{ animationDelay: `${idx * 0.1}s` }}>
                {project.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {project.description}
              </p>
              <a
                href="#"
                className="text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 inline-flex items-center gap-2 group"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
