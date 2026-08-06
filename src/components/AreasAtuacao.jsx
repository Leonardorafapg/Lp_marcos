const areas = [
  {
    title: 'Aposentadoria por Idade e Tempo de Contribuição',
    desc: 'Análise do tempo contributivo e orientação sobre a regra mais vantajosa para requerer o benefício.',
    img: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Aposentadoria por Invalidez e Auxílios',
    desc: 'Atuação em casos de incapacidade para o trabalho, incluindo perícias e recursos administrativos junto ao INSS.',
    img: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Revisão de Benefícios, Pensão e BPC/LOAS',
    desc: 'Análise de benefícios já concedidos e orientação a dependentes e pessoas com deficiência sobre seus direitos.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Rescisão e Verbas Trabalhistas',
    desc: 'Cálculo e cobrança de verbas rescisórias não pagas, horas extras, férias e demais direitos trabalhistas.',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Reconhecimento de Vínculo Empregatício',
    desc: 'Atuação em casos de trabalho informal ou "pejotização" para garantir o reconhecimento dos direitos trabalhistas.',
    img: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Assédio, Acidente de Trabalho e Rescisão Indireta',
    desc: 'Defesa em casos de assédio moral, acidentes de trabalho e situações que justificam a rescisão indireta do contrato.',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920217?q=80&w=800&auto=format&fit=crop',
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
            Direito <span className="italic text-amber-500">Previdenciário</span> e{' '}
            <span className="italic text-amber-500">Trabalhista</span>
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Acompanhamento completo, do requerimento junto ao INSS às causas
            trabalhistas, com atenção a cada detalhe do seu caso.
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
