const passos = [
  {
    numero: '01',
    title: 'Conversa inicial',
    desc: 'Entendemos sua situação, os bens envolvidos e a relação entre os herdeiros para definir o melhor caminho.',
  },
  {
    numero: '02',
    title: 'Reunião de documentos',
    desc: 'Orientamos exatamente quais certidões e documentos são necessários para dar entrada no processo.',
  },
  {
    numero: '03',
    title: 'Condução do processo',
    desc: 'Cuidamos de toda a parte jurídica e burocrática, em cartório ou na justiça, mantendo você informado a cada etapa.',
  },
  {
    numero: '04',
    title: 'Partilha concluída',
    desc: 'Formalização da partilha e regularização dos bens em nome dos herdeiros.',
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
