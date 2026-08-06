const ENDERECO = 'Endereço a definir'
const MAPS_QUERY = encodeURIComponent(ENDERECO)

export default function Localizacao() {
  return (
    <section id="localizacao" className="bg-white py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-amber-600">
          Localização
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
          Visite meu escritório
        </h2>

        <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
          <iframe
            title="Mapa do escritório"
            src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <p className="mt-4 flex items-center justify-center gap-2 text-slate-700">
          <span>📍</span> {ENDERECO}
        </p>

        <a
          href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 hover:bg-slate-800 transition-colors text-white font-semibold px-8 py-4"
        >
          Ver no Google Maps
        </a>
      </div>
    </section>
  )
}
