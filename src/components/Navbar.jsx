import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#how', label: 'How it works' },
  { href: '#features', label: 'Features' },
  { href: '#whofor', label: "Who it's for" },
  { href: '#security', label: 'Security' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors ${scrolled ? 'backdrop-blur-md bg-slate-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3" onClick={(e)=>handleNavClick(e,'#top')}>
            <div className="h-9 w-9 rounded-lg bg-emerald-500/20 border border-emerald-400/30 grid place-items-center text-emerald-400 font-extrabold">BVL</div>
            <div className="leading-tight">
              <p className="text-white font-semibold">Bank Verify Ledger</p>
              <p className="text-xs text-slate-400 -mt-1">Bank-grade verification</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={(e)=>handleNavClick(e,l.href)} className="text-slate-300 hover:text-white transition-colors text-sm">
                {l.label}
              </a>
            ))}
            <a
              href="#demo"
              onClick={(e)=>handleNavClick(e,'#demo')}
              className="text-black bg-emerald-400 hover:bg-emerald-300 font-semibold px-4 py-2 rounded-lg shadow-[0_0_0_3px_rgba(16,185,129,0.2)] transition-colors"
            >
              Book a Demo
            </a>
          </div>

          <button className="md:hidden p-2 text-slate-200" onClick={()=>setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={(e)=>handleNavClick(e,l.href)} className="block text-slate-300 hover:text-white text-sm">
                {l.label}
              </a>
            ))}
            <a href="#demo" onClick={(e)=>handleNavClick(e,'#demo')} className="block text-center text-black bg-emerald-400 hover:bg-emerald-300 font-semibold px-4 py-2 rounded-lg">Book a Demo</a>
          </div>
        )}
      </nav>
    </header>
  )
}
