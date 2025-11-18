import React from 'react'
import { ShieldCheck, ActivitySquare, Satellite, Cpu, Eye, Network } from 'lucide-react'

const tech = [
  { title: 'Breach & Attack Simulation (Obraid)', icon: ActivitySquare },
  { title: 'Threat Intelligence Services (Obxerve)', icon: Eye },
  { title: 'Continuous Monitoring & Detection', icon: Satellite },
  { title: 'Red Teaming & GRC', icon: ShieldCheck },
  { title: 'AI-Powered Incident Forecasting', icon: Cpu },
  { title: 'Attack Surface Management', icon: Network },
]

export default function Technologies() {
  return (
    <section id="tech" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(139,92,246,0.12),transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-white mb-8">Complementing Technologies</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tech.map(({ title, icon: Icon }) => (
            <div key={title} className="group relative p-6 rounded-2xl border border-white/10 bg-slate-900/40 overflow-hidden">
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-500/10 to-violet-600/10" />
              <div className="relative flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/30 to-violet-600/30 grid place-items-center text-cyan-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-slate-200 font-medium">{title}</div>
              </div>
              <div className="mt-6 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
