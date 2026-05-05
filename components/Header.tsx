// components/Header.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'

interface HeaderProps {
  isDark: boolean
  onThemeToggle: () => void
}

export default function Header({ isDark, onThemeToggle }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-xl z-50 border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            ✨ Dev Moe Kyawaung
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex list-none gap-8 items-center">
            <li><Link href="#home" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</Link></li>
            <li><Link href="#about" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About</Link></li>
            <li><Link href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Projects</Link></li>
            <li><Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</Link></li>
            <li>
              <button
                onClick={onThemeToggle}
                className="px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors font-semibold"
              >
                {isDark ? '☀️ Light' : '🌙 Dark'}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className={`w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <ul className="md:hidden flex flex-col gap-4 pb-4 list-none">
            <li><Link href="#home" className="text-gray-700 dark:text-gray-300 hover:text-purple-600">Home</Link></li>
            <li><Link href="#about" className="text-gray-700 dark:text-gray-300 hover:text-purple-600">About</Link></li>
            <li><Link href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-purple-600">Projects</Link></li>
            <li><Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-purple-600">Contact</Link></li>
            <li>
              <button
                onClick={onThemeToggle}
                className="px-4 py-2 rounded-full bg-purple-600 text-white w-full"
              >
                {isDark ? '☀️ Light' : '🌙 Dark'}
              </button>
            </li>
          </ul>
        )}
      </div>
    </header>
  )
}
