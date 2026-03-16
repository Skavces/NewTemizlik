import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/useTheme'

const navLinks = [
  { label: 'Ana Sayfa', href: '#' },
  { label: 'Panel Kirliliği', href: '#kir-problemleri' },
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'Süreç', href: '#surec' },
  { label: 'Referanslar', href: '#referanslar' },
  { label: 'S.S.S', href: '#sss' },
  { label: 'İletişim', href: '#iletisim' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isSolid = scrolled || open

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        backgroundColor: isSolid ? 'var(--bg-nav)' : 'transparent',
        boxShadow: isSolid ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        borderBottom: isSolid ? '1px solid var(--border-subtle)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 md:h-28">

          {/* Logo */}
          <a href="#" className="shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="New Temizlik Hizmetleri"
              className="h-20 md:h-24 w-auto object-contain"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium whitespace-nowrap transition-colors duration-200"
                style={{ color: isSolid ? 'var(--text-nav)' : 'rgba(255,255,255,0.9)', fontFamily: "'Poppins', sans-serif" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#7FBF3A')}
                onMouseLeave={(e) => (e.currentTarget.style.color = isSolid ? 'var(--text-nav)' : 'rgba(255,255,255,0.9)')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: CTA + theme */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggle}
              className="w-9 h-9 flex items-center justify-center transition-colors duration-200 cursor-pointer"
              style={{
                borderRadius: '50%',
                border: '1px solid',
                borderColor: isSolid ? 'var(--border-subtle)' : 'rgba(255,255,255,0.3)',
                background: 'transparent',
                color: isSolid ? 'var(--text-muted)' : 'rgba(255,255,255,0.8)',
              }}
              aria-label="Tema değiştir"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a
              href="#iletisim"
              className="transition-all duration-200"
              style={{
                padding: '10px 22px',
                background: '#7FBF3A',
                color: '#fff',
                fontSize: '13px',
                fontWeight: 600,
                borderRadius: '9999px',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                boxShadow: '0 4px 15px rgba(127,191,58,0.3)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#6aaa2e')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#7FBF3A')}
            >
              Ücretsiz Keşif
            </a>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              className="p-2 cursor-pointer"
              style={{ color: isSolid ? 'var(--text-muted)' : '#ffffff', background: 'none', border: 'none' }}
              aria-label="Tema değiştir"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 cursor-pointer"
              style={{ color: isSolid ? 'var(--text-muted)' : '#ffffff', background: 'none', border: 'none' }}
              aria-label="Menü"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ backgroundColor: 'var(--bg-nav-mobile)', borderTop: '1px solid var(--border-subtle)' }}
      >
        <div className="px-5 py-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm font-medium border-b transition-colors"
              style={{ color: 'var(--text-muted)', borderColor: 'var(--border-subtle)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#iletisim"
            onClick={() => setOpen(false)}
            className="mt-4 py-3 text-white font-semibold text-center text-sm"
            style={{ background: '#7FBF3A', borderRadius: '9999px', textDecoration: 'none', letterSpacing: '0.04em' }}
          >
            Ücretsiz Keşif Talep Et
          </a>
        </div>
      </div>
    </nav>
  )
}
