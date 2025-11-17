import { PhoneCall } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative bg-[#070b0f] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Ready when you are</h2>
          <p className="mt-3 text-white/70">Call or email to schedule in-store, on-site, or remote support. Same-day options available across Northern Virginia.</p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="tel:+17035551234" className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-6 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition">
            <PhoneCall className="h-4 w-4" /> (703) 555-1234
          </a>
          <a href="mailto:hello@glaciergeeks.com" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
            hello@glaciergeeks.com
          </a>
        </div>
        <p className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} Glacier Geeks. All rights reserved.</p>
      </div>
    </section>
  )
}
