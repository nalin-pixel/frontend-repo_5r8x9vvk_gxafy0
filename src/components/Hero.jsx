import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] pt-24 overflow-hidden bg-[#0a0f14]">
      {/* Gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(0,255,255,0.25),rgba(0,0,0,0))] pointer-events-none" />

      {/* 3D Spline */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative order-2 lg:order-1 py-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Elite Computer Repair & IT Support for Northern Virginia
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-xl">
            Glacier Geeks delivers fast, secure, and stress-free tech solutions for homes and businesses.
            Hardware fixes, data recovery, managed IT, and cybersecurity — done right.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-5 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition">
              Book Service <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
              Explore Services
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 text-center">
            {[
              ['2,000+', 'Devices Repaired'],
              ['24/7', 'Emergency Support'],
              ['4.9★', 'Client Rating'],
            ].map(([stat, label]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/5 p-4">
                <dt className="text-2xl font-semibold text-white">{stat}</dt>
                <dd className="text-xs text-white/60">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative order-1 lg:order-2 h-[440px] sm:h-[520px] lg:h-[640px]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-cyan-500/20">
            <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
