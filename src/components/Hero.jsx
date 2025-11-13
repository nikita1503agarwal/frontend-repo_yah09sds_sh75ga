import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/30" />

      <div className="relative z-10 container mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-4">Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">a Software Developer</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-600">
            I craft modern web applications with clean architecture, strong UX, and scalable code. Explore my skills, certifications, and experience below.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#skills" className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-lg hover:bg-slate-800 transition-colors">
              View Skills
            </a>
            <a href="#experience" className="inline-flex items-center gap-2 bg-white text-slate-900 border border-slate-200 px-5 py-3 rounded-lg hover:border-slate-300 transition-colors">
              Work Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
