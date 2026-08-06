import { useState } from 'react'

const faqs = [
  {
    q: 'Com quantos anos posso me aposentar?',
    a: 'Depende da regra aplicável ao seu caso (idade, tempo de contribuição ou regras de transição, para quem já contribuía antes da reforma de 2019). Na conversa inicial analiso seu histórico e indico a regra mais vantajosa.',
  },
  {
    q: 'O INSS negou meu benefício, o que fazer?',
    a: 'É possível entrar com recurso administrativo ou, dependendo do caso, ação judicial para reverter a negativa. Muitos indeferimentos ocorrem por falta de documentação ou análise incorreta do tempo de contribuição.',
  },
  {
    q: 'Meu benefício pode estar sendo pago a menor?',
    a: 'Sim, é comum benefícios serem concedidos com valores abaixo do devido. Faço uma análise gratuita do seu caso para verificar se há direito a revisão e diferenças a receber.',
  },
  {
    q: 'Quais documentos preciso reunir?',
    a: 'Em geral: documentos pessoais, carteira de trabalho, extrato do CNIS e comprovantes de contribuição. Na conversa inicial te passo a lista completa conforme o benefício buscado.',
  },
]

export default function Duvidas() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="duvidas" className="bg-white py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-blue-800">
            Dúvidas
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Perguntas frequentes
          </h2>
        </div>

        <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 py-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-slate-900">{faq.q}</span>
                  <span
                    className={`shrink-0 text-2xl text-blue-800 transition-transform ${isOpen ? 'rotate-45' : ''}`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-6 text-slate-600 leading-relaxed">{faq.a}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
