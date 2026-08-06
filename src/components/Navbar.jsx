import { useState } from 'react'

const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b border-slate-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
            MARCUS <span className="font-bold text-blue-800">RAMOS</span>
          </span>
          <span className="hidden sm:block text-[10px] leading-tight text-slate-500 uppercase font-medium border-l border-slate-300 pl-2">
            Consultoria<br />e Assessoria<br />Jurídica
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-slate-800 font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-blue-800 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden lg:inline-flex items-center rounded-full bg-slate-900 text-white font-semibold px-6 py-3 hover:bg-slate-800 transition-colors"
        >
          Fale Comigo!
        </a>

        <button
          type="button"
          className="lg:hidden p-2 text-slate-900"
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
        <div className="lg:hidden border-t border-slate-200 px-4 pb-4">
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
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-slate-900 text-white font-semibold px-6 py-3"
          >
            Fale Comigo!
          </a>
        </div>
      )}
    </header>
  )
}
