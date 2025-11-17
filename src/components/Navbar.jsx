import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a href="#" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/30" />
            <div className="leading-tight">
              <p className="text-white font-semibold tracking-wide">Glacier Geeks</p>
              <p className="text-xs text-cyan-200/70">IT & Computer Repair</p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-white/80 hover:text-white transition">Services</a>
            <a href="#why" className="text-sm text-white/80 hover:text-white transition">Why Us</a>
            <a href="#process" className="text-sm text-white/80 hover:text-white transition">Process</a>
            <a href="#contact" className="text-sm text-white/80 hover:text-white transition">Contact</a>
            <a href="tel:+17035551234" className="hidden lg:flex items-center gap-2 text-sm text-cyan-200 hover:text-white transition">
              <Phone className="h-4 w-4" /> (703) 555-1234
            </a>
            <a href="mailto:hello@glaciergeeks.com" className="hidden lg:flex items-center gap-2 text-sm text-cyan-200 hover:text-white transition">
              <Mail className="h-4 w-4" /> hello@glaciergeeks.com
            </a>
          </nav>

          {/* Mobile */}
          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden text-white">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="grid gap-3">
              <a href="#services" onClick={() => setOpen(false)} className="text-white/80 hover:text-white">Services</a>
              <a href="#why" onClick={() => setOpen(false)} className="text-white/80 hover:text-white">Why Us</a>
              <a href="#process" onClick={() => setOpen(false)} className="text-white/80 hover:text-white">Process</a>
              <a href="#contact" onClick={() => setOpen(false)} className="text-white/80 hover:text-white">Contact</a>
              <div className="flex flex-col gap-2 pt-2">
                <a href="tel:+17035551234" className="flex items-center gap-2 text-cyan-200">
                  <Phone className="h-4 w-4" /> (703) 555-1234
                </a>
                <a href="mailto:hello@glaciergeeks.com" className="flex items-center gap-2 text-cyan-200">
                  <Mail className="h-4 w-4" /> hello@glaciergeeks.com
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
