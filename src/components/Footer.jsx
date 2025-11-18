import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-slate-400 text-sm text-center sm:text-left">
          AHAD Cybersecurity • Dubai, UAE • www.ahad-me.com
        </div>
        <div className="flex items-center gap-6 text-slate-300 text-sm">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#tech" className="hover:text-white">Solutions</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="https://www.linkedin.com/company/ahad-me" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  )
}
