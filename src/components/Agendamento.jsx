export default function Agendamento() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl">
          <div className="bg-slate-900 p-10 sm:p-14 flex flex-col justify-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-amber-300">
              Agendamento
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white font-serif">
              Agendamento de{' '}
              <span className="italic text-amber-300">atendimento inicial</span>
            </h2>
            <p className="mt-4 text-slate-300">
              O agendamento permite apresentar a situação do inventário e receber
              orientações iniciais sobre os próximos passos do processo.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-slate-900">
              Olá, <span className="italic font-serif text-amber-500">bem vindo(a)</span>!
            </h3>
            <p className="mt-2 text-slate-600">
              Para agendar a sua consulta, basta seguir três passos simples:
            </p>

            <ol className="mt-4 space-y-2 text-slate-700 text-sm">
              <li>1. Identifique e escolha o atendimento, o dia e o horário disponíveis;</li>
              <li>2. Clique no botão "Agendar atendimento";</li>
              <li>3. Preencha os dados e pronto. Nos veremos em breve!</li>
            </ol>

            <p className="mt-4 rounded-lg bg-slate-100 px-4 py-3 text-xs text-slate-500">
              Obs: Fique tranquilo(a)! Não compartilho seus dados com ninguém.
            </p>

            <div className="mt-5 flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3">
              <span className="text-lg">📞</span>
              <span className="text-sm font-medium text-slate-800">
                Atendimento Online (20 minutos)
              </span>
            </div>
            <div className="mt-3 flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3">
              <span className="text-lg">📅</span>
              <span className="text-sm font-medium text-slate-800">
                Datas e Horários Disponíveis
              </span>
            </div>

            <a
              href="#contato"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-slate-900 hover:bg-slate-800 transition-colors text-white font-semibold px-8 py-4"
            >
              Agendar atendimento!
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
