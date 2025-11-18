import React from 'react'
import Spline from '@splinetool/react-spline'
import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950/80 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            Vigilance in the Digital Cosmos
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(34,211,238,0.25)]">
            See What Hackers See. Secure What They Target.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-200/90 max-w-2xl">
            Hacker Gazing by AHAD is your predictive security layer—built to anticipate threats, not just react to them.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-medium shadow-[0_10px_40px_rgba(99,102,241,0.4)]">
              Request a Demo <ChevronRight className="ml-2 w-4 h-4" />
            </a>
            <a href="#about" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/15 text-slate-100 bg-white/5">
              Explore Hacker Gazing
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
