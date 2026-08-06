import { useEffect, useState } from 'react'

const links = [
  { label: 'Áreas de Atuação', href: '#areas' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-colors duration-300 ${
        solid ? 'bg-white border-b border-slate-200 shadow-sm' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span
            className={`text-xl sm:text-2xl font-extrabold tracking-tight transition-colors duration-300 ${
              solid ? 'text-slate-900' : 'text-white'
            }`}
          >
            MARCUS{' '}
            <span className={solid ? 'font-bold text-blue-800' : 'font-bold text-amber-300'}>
              RAMOS
            </span>
          </span>
          <span
            className={`hidden sm:block text-[10px] leading-tight uppercase font-medium border-l pl-2 transition-colors duration-300 ${
              solid ? 'text-slate-500 border-slate-300' : 'text-slate-200 border-white/40'
            }`}
          >
            Consultoria<br />e Assessoria<br />Jurídica
          </span>
        </a>

        <ul
          className={`hidden lg:flex items-center gap-8 font-medium transition-colors duration-300 ${
            solid ? 'text-slate-800' : 'text-white'
          }`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`transition-colors ${solid ? 'hover:text-blue-800' : 'hover:text-amber-300'}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className={`hidden lg:inline-flex items-center rounded-lg font-semibold px-6 py-3 transition-colors duration-300 ${
            solid
              ? 'bg-slate-900 text-white hover:bg-slate-800'
              : 'bg-white/10 text-white border border-white/40 hover:bg-white/20'
          }`}
        >
          Fale Comigo!
        </a>

        <button
          type="button"
          className={`lg:hidden p-2 transition-colors duration-300 ${solid ? 'text-slate-900' : 'text-white'}`}
          aria-label="Abrir menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6l-12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pb-4">
          <ul className="flex flex-col gap-4 pt-4 text-slate-800 font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-slate-900 text-white font-semibold px-6 py-3"
          >
            Fale Comigo!
          </a>
        </div>
      )}
    </header>
  )
}
