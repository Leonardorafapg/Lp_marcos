const servicos = [
  {
    title: 'Inventário Extrajudicial',
    desc: 'Condução do inventário em cartório, de forma mais rápida e econômica, quando há acordo entre os herdeiros.',
  },
  {
    title: 'Inventário Judicial',
    desc: 'Atuação em processos que exigem tramitação na justiça, como em casos de testamento, menores ou divergência entre herdeiros.',
  },
  {
    title: 'Partilha de Bens',
    desc: 'Orientação e formalização da divisão de bens entre os herdeiros, de forma justa e conforme a legislação.',
  },
  {
    title: 'Regularização de Imóveis',
    desc: 'Atualização de matrículas, escrituras e registros para que os imóveis fiquem regularizados no nome dos herdeiros.',
  },
]

export default function Servicos() {
  return (
    <section id="servicos" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-blue-800">
            Serviços
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Como posso te ajudar
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Atuação especializada em cada etapa do processo de inventário, com
            atendimento próximo e linguagem acessível.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {servicos.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-200 p-8 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold text-slate-900">{s.title}</h3>
              <p className="mt-3 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
