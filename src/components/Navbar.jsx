import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Who We Are', href: '#who' },
  { label: 'Mission & Vision', href: '#mv' },
  { label: 'Values', href: '#values' },
  { label: 'Services', href: '#services' },
  { label: 'Strategy', href: '#strategy' },
  { label: 'Work', href: '#work' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={() => handleClick('#top')} className="group inline-flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#00D1FF] group-hover:scale-110 transition-transform" />
          <span className="font-extrabold tracking-tight text-white text-lg">Avanza Labs</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button onClick={() => handleClick('#contact')} className="ml-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm border border-white/10">
            Work With Us
          </button>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 grid gap-3">
            {navItems.map((item) => (
              <button key={item.href} onClick={() => handleClick(item.href)} className="text-left text-white/90 py-2">
                {item.label}
              </button>
            ))}
            <button onClick={() => handleClick('#contact')} className="rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm border border-white/10">
              Work With Us
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
