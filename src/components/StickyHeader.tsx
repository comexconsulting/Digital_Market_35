import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#proceso', label: 'Proceso' },
  { href: '/#proyectos', label: 'Así trabajamos' },
  { href: '/noticias', label: 'Noticias' },
]

interface StickyHeaderProps {
  onBookDemo: () => void
}

export function StickyHeader({ onBookDemo }: StickyHeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-surface-base/85 backdrop-blur-md border-b border-border-hairline' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link
          to="/"
          className="font-display text-sm font-bold uppercase tracking-wide text-text-primary sm:text-base"
        >
          Digital<span className="text-cyan-500">_</span>Market<span className="text-cyan-500">_</span>35
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Secciones de la página">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="font-body text-sm font-medium uppercase tracking-wide text-text-secondary transition-opacity hover:text-text-primary hover:opacity-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button variant="primary" onClick={onBookDemo} className="text-[0.65rem] px-5 py-2.5 sm:text-xs sm:px-6 sm:py-3">
          Agendá tu demo
        </Button>
      </div>
    </header>
  )
}
