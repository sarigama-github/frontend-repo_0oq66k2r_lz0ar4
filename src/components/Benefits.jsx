import React from 'react'

const items = [
  { value: 'Reduce breach risk by 80%' },
  { value: 'Predict attacker moves before they occur' },
  { value: 'Enhance SLA performance and resilience' },
  { value: 'KHDA/ISO/NCA compliance-ready' },
]

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),transparent_45%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white">Benefits</h3>
            <p className="mt-4 text-slate-300">
              Outcomes designed for security leaders delivering real resilience against evolving threats.
            </p>
            <ul className="mt-6 space-y-3">
              {items.map((i) => (
                <li key={i.value} className="flex items-center gap-3 text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]"></span>
                  {i.value}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 blur-2xl bg-gradient-to-r from-cyan-500/30 to-violet-600/30 rounded-3xl" />
            <div className="relative p-8 rounded-3xl border border-white/10 bg-slate-900/60">
              <div className="grid grid-cols-2 gap-6">
                {items.map((i) => (
                  <div key={i.value} className="aspect-square rounded-2xl border border-white/10 bg-white/5 grid place-items-center text-center text-slate-200 p-4">
                    {i.value}
                  </div>
                ))}
              </div>
              <p className="mt-3 text-center text-xs text-slate-400">Infographic: circular galaxy chart representation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
