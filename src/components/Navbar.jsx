import React from 'react'

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-30">
      <div className="mx-3 my-3 rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <nav className="container mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-bold tracking-tight text-slate-900 text-lg">MyPortfolio</a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#skills" className="text-slate-700 hover:text-slate-900">Skills</a>
            <a href="#experience" className="text-slate-700 hover:text-slate-900">Experience</a>
            <a href="#contact" className="text-slate-700 hover:text-slate-900">Contact</a>
          </div>
          <a href="#contact" className="hidden md:inline-flex bg-slate-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-800">Hire Me</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
