import advogadoImg from '../assets/advogado.png'
import WhatsAppIcon, { WHATSAPP_URL } from './WhatsAppIcon'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-800">
      <img
        src={advogadoImg}
        alt="Advogado Marcus Mota"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Especialista em{' '}
            <span className="italic font-serif text-amber-300">Direito Previdenciário</span>{' '}
            e <span className="italic font-serif text-amber-300">Trabalhista</span>
          </h1>

          <p className="mt-6 text-lg text-slate-200 max-w-xl">
            Atuação em aposentadorias, revisões de benefícios e processos junto
            ao INSS, além de causas trabalhistas como rescisões, verbas não
            pagas e reconhecimento de vínculo empregatício, com orientação
            clara em cada etapa do caso.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-800 hover:bg-blue-700 transition-colors text-white font-semibold px-8 py-4"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Fale Comigo!
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center rounded-lg border border-white/40 hover:bg-white/10 transition-colors text-white font-semibold px-8 py-4"
            >
              Como funciona
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
