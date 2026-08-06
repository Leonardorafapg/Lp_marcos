const areas = [
  {
    title: 'Inventário Extrajudicial',
    desc: 'Conduzido em cartório nos casos em que há acordo entre os herdeiros e os requisitos legais para a via extrajudicial estão presentes.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Inventário Judicial',
    desc: 'Atuação em processos com litígio, herdeiros menores ou ausência de testamento, do início ao fim.',
    img: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Levantamento e Avaliação de Bens',
    desc: 'Mapeamento de imóveis, contas, veículos e demais bens do espólio para fins de partilha.',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Direito de Família',
    desc: 'Orientação em divórcios, partilha de bens conjugais e questões que se cruzam com a sucessão patrimonial.',
    img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Direito Imobiliário',
    desc: 'Regularização de matrículas, escrituras e registros de imóveis para adequação à legislação vigente.',
    img: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Planejamento Sucessório',
    desc: 'Estruturação prévia do patrimônio para reduzir custos, tempo e conflitos entre herdeiros no futuro.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
  },
]

export default function AreasAtuacao() {
  return (
    <section id="areas" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-amber-600">
            Áreas de atuação
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            Direito das <span className="italic text-amber-500">sucessões</span>
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Acompanhamento das etapas do inventário, do levantamento de bens até a
            escritura ou a sentença.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img src={a.img} alt={a.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 font-serif">{a.title}</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
