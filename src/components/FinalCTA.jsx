import React from 'react'
import { Rocket, Phone, Calendar } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.12),transparent_40%)]" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl sm:text-4xl font-bold text-white">Start Seeing What Hackers See.</h3>
        <p className="mt-4 text-slate-300">Book a tailored assessment or speak with a cyber advisor today.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-medium shadow-[0_10px_40px_rgba(99,102,241,0.4)]">
            <Calendar className="w-4 h-4" /> Book Security Assessment
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-slate-100 bg-white/5">
            <Phone className="w-4 h-4" /> Contact Cyber Advisor
          </a>
        </div>
        <div className="mt-12 relative">
          <div className="absolute inset-0 -z-0 blur-3xl bg-gradient-to-r from-cyan-500/20 to-violet-600/20 rounded-full" />
          <div className="relative mx-auto w-56 h-56 rounded-full border border-white/15 bg-slate-900/60 grid place-items-center">
            <div className="w-40 h-40 rounded-full border border-white/10 grid place-items-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-400 to-violet-500 grid place-items-center text-white">
                <Rocket className="w-8 h-8" />
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-400">Orbit-style CTA with floating icons</p>
        </div>
      </div>
    </section>
  )
}
