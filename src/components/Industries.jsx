import React from 'react'
import { Building2, GraduationCap, Landmark, Hospital, FlameKindling, CircuitBoard } from 'lucide-react'

const industries = [
  { name: 'BFSI', icon: Building2 },
  { name: 'Education', icon: GraduationCap },
  { name: 'Government', icon: Landmark },
  { name: 'Healthcare', icon: Hospital },
  { name: 'Oil & Gas', icon: FlameKindling },
  { name: 'Smart Cities', icon: CircuitBoard },
]

export default function Industries() {
  return (
    <section id="industries" className="relative py-20 bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h3 className="text-3xl font-bold text-white">Industries We Secure</h3>
          <div className="text-sm text-slate-400">Swipe on mobile</div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map(({ name, icon: Icon }) => (
            <div key={name} className="group p-6 rounded-2xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/30 to-violet-600/30 grid place-items-center text-cyan-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-slate-200 font-medium">{name}</div>
              </div>
              <div className="mt-4 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600" />
              <p className="mt-3 text-slate-400 text-sm">Adaptive defenses, compliance, and resilience tailored to {name}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
