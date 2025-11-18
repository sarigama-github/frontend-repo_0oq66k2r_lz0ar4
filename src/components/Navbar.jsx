import React from 'react'
import { Menu, Shield, Telescope } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.6)]">
            <Telescope className="w-5 h-5" />
          </div>
          <div className="leading-tight">
            <div className="text-sm text-cyan-300">AHAD</div>
            <div className="text-xs text-slate-300/80">Hacker Gazing</div>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8 text-slate-200">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#tech" className="hover:text-white transition-colors">Technologies</a>
          <a href="#benefits" className="hover:text-white transition-colors">Benefits</a>
          <a href="#industries" className="hover:text-white transition-colors">Industries</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Trusted</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm shadow-[0_0_30px_rgba(34,211,238,0.35)]">
            <Shield className="w-4 h-4" /> Request a Demo
          </a>
          <button className="md:hidden text-slate-200" aria-label="Open Menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>
  )
}
