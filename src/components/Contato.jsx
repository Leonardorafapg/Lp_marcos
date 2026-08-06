export default function Contato() {
  return (
    <section id="contato" className="bg-slate-900 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl">
          <div className="bg-slate-900 p-10 sm:p-14 flex flex-col justify-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-amber-300">
              Contato
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white font-serif">
              Vamos conversar sobre{' '}
              <span className="italic text-amber-300">o seu caso</span>
            </h2>
            <p className="mt-4 text-slate-300">
              Agende um atendimento inicial de 20 minutos, online, e receba
              orientação sobre os próximos passos do seu inventário. Fique
              tranquilo(a): seus dados não são compartilhados com ninguém.
            </p>

            <div className="mt-6 space-y-2 text-slate-300 text-sm">
              <p className="flex items-center gap-2">
                <span>📞</span> Atendimento online de 20 minutos
              </p>
              <p className="flex items-center gap-2">
                <span>📅</span> Escolha o dia e horário que preferir
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-amber-400 hover:bg-amber-300 transition-colors text-slate-900 font-semibold px-8 py-4"
              >
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white p-8 sm:p-10 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-slate-900">
              Olá, <span className="italic font-serif text-amber-500">bem vindo(a)</span>!
            </h3>
            <p className="mt-2 text-slate-600">
              É simples: chame no WhatsApp ao lado, me conte brevemente sobre o
              caso e combinamos juntos o melhor dia e horário para conversar.
            </p>

            <ol className="mt-6 space-y-3 text-slate-700 text-sm">
              <li className="flex gap-3">
                <span className="font-bold text-amber-500">1.</span>
                Chame no WhatsApp e conte um pouco sobre a sua situação.
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-amber-500">2.</span>
                Combinamos juntos o dia e horário do atendimento.
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-amber-500">3.</span>
                Nos falamos e você já sai com os próximos passos definidos.
              </li>
            </ol>

            <a
              href="mailto:contato@marcusramos.adv.br"
              className="mt-8 inline-flex items-center justify-center rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors text-slate-800 font-semibold px-8 py-4"
            >
              Prefiro enviar um e-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
