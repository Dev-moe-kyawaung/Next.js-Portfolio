// components/Contact.tsx
'use client'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 dark:from-purple-900 dark:to-pink-900">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
        <p className="text-lg mb-12 opacity-90">
          Feel free to reach out through any of these platforms
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://github.com/Dev-moe-kyawaung"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white/20 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all duration-300"
          >
            GitHub
          </a>
          <a
            href="https://gravatar.com/moekyawaung2026"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white/20 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all duration-300"
          >
            Gravatar
          </a>
          <a
            href="https://gravatar.com/moekyawaung13721"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white/20 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all duration-300"
          >
            Profile 2
          </a>
          <a
            href="mailto:moekyawaung@example.com"
            className="px-8 py-3 bg-white/20 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  )
}
