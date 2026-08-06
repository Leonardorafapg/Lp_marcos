import { useState } from 'react'

const faqs = [
  {
    q: 'Qual a diferença entre inventário extrajudicial e judicial?',
    a: 'O inventário extrajudicial é feito em cartório, é mais rápido e exige que todos os herdeiros sejam maiores, capazes e estejam de acordo. O judicial tramita na justiça e é necessário quando há testamento, herdeiros menores/incapazes ou divergência entre as partes.',
  },
  {
    q: 'Quanto tempo demora um inventário?',
    a: 'O extrajudicial costuma levar de 30 a 60 dias após reunidos todos os documentos. O judicial varia conforme a complexidade do caso e a vara responsável, podendo levar alguns meses.',
  },
  {
    q: 'Existe prazo legal para abrir o inventário?',
    a: 'Sim, a lei prevê o prazo de até 2 meses após o falecimento para dar entrada no inventário, sob pena de multa. Mesmo perdido o prazo, o processo pode e deve ser realizado.',
  },
  {
    q: 'Quais documentos preciso reunir?',
    a: 'Em geral: certidão de óbito, documentos pessoais do falecido e dos herdeiros, certidão de casamento, e documentos dos bens (imóveis, veículos, contas). Na conversa inicial te passo a lista completa para o seu caso.',
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
