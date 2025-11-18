import React from 'react'

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.12),transparent_30%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-white mb-10">Trusted By</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="h-12 rounded-md bg-slate-800/60 mb-4" />
              <p className="text-slate-300 text-sm">“AHAD helped us visualize attacker paths and remediate before exploitation.”</p>
              <div className="mt-3 text-xs text-slate-400">CISO, Enterprise Client</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
