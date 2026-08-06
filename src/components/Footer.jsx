export default function Footer() {
  return (
    <footer className="bg-slate-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <span>© {new Date().getFullYear()} Marcus Ramos — Consultoria e Assessoria Jurídica</span>
        <span>OAB — todos os direitos reservados</span>
      </div>
    </footer>
  )
}
