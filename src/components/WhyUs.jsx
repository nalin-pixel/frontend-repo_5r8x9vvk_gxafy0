import { CheckCircle2, ShieldCheck, Clock, Trophy } from 'lucide-react'

const points = [
  { icon: ShieldCheck, title: 'Security-first', desc: 'All repairs and IT services follow strict data privacy standards.' },
  { icon: Clock, title: 'Rapid turnaround', desc: 'Diagnostics in hours, repairs typically within 24–48 hours.' },
  { icon: Trophy, title: 'Local & trusted', desc: 'Northern Virginia technicians with 4.9★ average rating.' },
  { icon: CheckCircle2, title: 'Transparent pricing', desc: 'Flat-rate diagnostics. No surprises. No upselling.' },
]

export default function WhyUs() {
  return (
    <section id="why" className="relative bg-[#070b0f] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Why Northern Virginia chooses Glacier Geeks</h2>
            <p className="mt-4 text-white/70 max-w-xl">We combine enterprise-grade security with boutique service. Whether it’s your personal laptop or your entire office network, we’ve got you covered.</p>

            <div className="mt-8 grid gap-4">
              {points.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="rounded-full bg-cyan-500/20 p-2 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{title}</p>
                    <p className="text-white/70 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-8">
            <p className="text-white font-medium">Proudly serving:</p>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-white/70 text-sm">
              {['Arlington','Alexandria','Fairfax','Reston','Tysons','Ashburn','Herndon','Leesburg'].map((c) => (
                <li key={c} className="rounded-md bg-white/5 px-3 py-2">{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
