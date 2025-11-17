import { Shield, Wrench, Server, Laptop, Cloud, HardDrive } from 'lucide-react'

const items = [
  { icon: Laptop, title: 'Computer Repair', desc: 'Screen, battery, keyboard, and hardware replacement with OEM-grade parts.' },
  { icon: HardDrive, title: 'Data Recovery', desc: 'Recover lost files from damaged drives with secure, lab-grade methods.' },
  { icon: Shield, title: 'Cybersecurity', desc: 'Endpoint protection, vulnerability audits, and threat monitoring.' },
  { icon: Server, title: 'Managed IT', desc: 'Proactive monitoring, backups, and remote support for SMBs.' },
  { icon: Cloud, title: 'Cloud & Migrations', desc: 'Microsoft 365, Google Workspace, and seamless cloud transitions.' },
  { icon: Wrench, title: 'On-Site & 24/7', desc: 'Emergency response across Northern Virginia with same-day options.' },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0a0f14] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Services built for speed and security</h2>
        <p className="mt-3 text-white/70 max-w-2xl">From one-time repairs to fully managed IT, Glacier Geeks keeps your systems fast, secure, and always-on.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 hover:border-cyan-400/40 transition">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-cyan-500/20 p-2 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-white font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
