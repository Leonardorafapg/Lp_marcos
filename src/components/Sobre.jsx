import advogadoImg from '../assets/advogado.png'

export default function Sobre() {
  return (
    <section id="sobre" className="bg-slate-50 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src={advogadoImg}
              alt="Marcus Ramos"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-amber-600">
              Sobre
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
              Marcus <span className="italic text-amber-500">Ramos</span>
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Advogado especializado em Direito das Sucessões, com atuação
              dedicada a processos de inventário, partilha de bens e
              regularização de imóveis. Atendimento próximo e transparente, com
              linguagem acessível para orientar você e sua família em cada etapa
              do processo.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Ao longo da carreira, construiu uma abordagem que une segurança
              jurídica e cuidado humano, buscando sempre a solução mais rápida e
              menos desgastante para os herdeiros.
            </p>

            <a
              href="#contato"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-slate-900 hover:bg-slate-800 transition-colors text-white font-semibold px-8 py-4"
            >
              Falar com o advogado
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
