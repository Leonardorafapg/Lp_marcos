const passos = [
  {
    numero: '01',
    title: 'Conversa inicial',
    desc: 'Entendemos seu histórico contributivo e sua situação para identificar o melhor benefício a buscar.',
  },
  {
    numero: '02',
    title: 'Análise do caso',
    desc: 'Levantamento do extrato previdenciário (CNIS) e dos documentos necessários para o requerimento ou revisão.',
  },
  {
    numero: '03',
    title: 'Condução do processo',
    desc: 'Cuidamos de todo o requerimento junto ao INSS ou do processo judicial, mantendo você informado a cada etapa.',
  },
  {
    numero: '04',
    title: 'Benefício concedido',
    desc: 'Acompanhamento até a concessão do benefício, com orientação sobre os próximos passos.',
  },
]

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-slate-50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-blue-800">
            Como funciona
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Um processo simples, do começo ao fim
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {passos.map((p) => (
            <div key={p.numero}>
              <span className="text-4xl font-extrabold text-amber-400">{p.numero}</span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
