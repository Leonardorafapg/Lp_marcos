const areas = [
  {
    title: 'Aposentadoria por Idade',
    desc: 'Análise do tempo de contribuição e orientação sobre o melhor momento e a melhor regra para requerer o benefício.',
    img: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Aposentadoria por Tempo de Contribuição',
    desc: 'Cálculo do tempo contributivo, inclusão de períodos especiais e definição da regra de transição mais vantajosa.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Aposentadoria por Invalidez',
    desc: 'Atuação em casos de incapacidade permanente para o trabalho, incluindo perícias e recursos administrativos.',
    img: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Auxílio por Incapacidade',
    desc: 'Orientação e acompanhamento em pedidos de auxílio-doença e demais benefícios por incapacidade temporária.',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Revisão de Benefícios',
    desc: 'Análise de benefícios já concedidos para identificar valores pagos a menor e possibilidade de revisão junto ao INSS.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Pensão por Morte e BPC/LOAS',
    desc: 'Orientação a dependentes na solicitação de pensão por morte e a idosos e pessoas com deficiência no BPC/LOAS.',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
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
            Direito <span className="italic text-amber-500">Previdenciário</span>
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Acompanhamento completo do requerimento, da análise do benefício até
            eventuais recursos junto ao INSS.
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
