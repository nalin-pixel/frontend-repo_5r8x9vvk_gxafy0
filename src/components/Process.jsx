import { StepForward, Wrench, Shield, ThumbsUp } from 'lucide-react'

const steps = [
  { icon: StepForward, title: '1. Diagnose', desc: 'Quick check-in, transparent estimate, no pressure.' },
  { icon: Wrench, title: '2. Repair / Implement', desc: 'Certified techs repair devices or deploy IT solutions.' },
  { icon: Shield, title: '3. Secure & Verify', desc: 'Security hardening and quality checks on every job.' },
  { icon: ThumbsUp, title: '4. Deliver', desc: 'We hand off with tips, warranty, and proactive guidance.' },
]

export default function Process() {
  return (
    <section id="process" className="relative bg-[#0a0f14] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Our process is simple and predictable</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
              <div className="rounded-lg bg-cyan-500/20 p-2 text-cyan-300 inline-flex">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-white font-medium">{title}</p>
              <p className="text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
