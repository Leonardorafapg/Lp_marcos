export default function Contato() {
  return (
    <section id="contato" className="bg-slate-900 py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-amber-300">
          Contato
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
          Vamos conversar sobre o seu caso
        </h2>
        <p className="mt-4 text-slate-300 text-lg max-w-xl mx-auto">
          Fale diretamente comigo pelo WhatsApp e receba orientação sobre os
          próximos passos do seu inventário.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-amber-400 hover:bg-amber-300 transition-colors text-slate-900 font-semibold px-8 py-4"
          >
            Falar no WhatsApp
          </a>
          <a
            href="mailto:contato@marcusramos.adv.br"
            className="inline-flex items-center justify-center rounded-full border border-white/30 hover:bg-white/10 transition-colors text-white font-semibold px-8 py-4"
          >
            Enviar e-mail
          </a>
        </div>
      </div>
    </section>
  )
}
