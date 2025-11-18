import React from 'react'
import { Radar, BrainCircuit, Map, Activity } from 'lucide-react'

const bullets = [
  { icon: Radar, title: 'Threat Intelligence' },
  { icon: BrainCircuit, title: 'Behavioral Modeling' },
  { icon: Map, title: 'Vulnerability Mapping' },
  { icon: Activity, title: 'Real-Time Simulation' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(34,211,238,0.15),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(139,92,246,0.12),transparent_35%)]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Hacker Gazing: What & Why</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Anticipate adversaries by understanding their behavior. Our platform models attacker paths, correlates signals, and maps exploitable weaknesses across your digital universe—so you can act before they do.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bullets.map(({ icon: Icon, title }) => (
                <div key={title} className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 text-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/30 to-violet-600/30 flex items-center justify-center text-cyan-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium">{title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 to-violet-600/30 blur-2xl"></div>
            <div className="relative rounded-3xl border border-white/10 bg-slate-900/60 p-6">
              <div className="aspect-[4/3] rounded-2xl bg-[conic-gradient(at_50%_50%,rgba(34,211,238,0.2),rgba(99,102,241,0.2),rgba(34,211,238,0.2))] grid place-items-center">
                <div className="w-40 h-40 rounded-full border border-cyan-300/30 grid place-items-center animate-pulse">
                  <div className="w-24 h-24 rounded-full border border-violet-400/30 grid place-items-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-400 to-violet-500 shadow-[0_0_30px_rgba(34,211,238,0.5)]" />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-xs text-slate-400">Cosmic radar visualizing attacker signal density</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
