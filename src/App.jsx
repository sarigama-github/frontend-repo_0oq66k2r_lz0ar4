import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Benefits from './components/Benefits'
import Industries from './components/Industries'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Technologies />
        <Benefits />
        <Industries />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
