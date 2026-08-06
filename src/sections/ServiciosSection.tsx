import { Check } from 'lucide-react'
import { FadeIn } from '../components/FadeIn'

const WHATSAPP_NUMBER = '51985721349'

const TIERS = [
  {
    n: '01',
    name: 'Web Informativa',
    price: 'US$ 300',
    desc: 'Web profesional, con la base lista para integrar CRM y chatbot después.',
    features: [
      'Diseño tradicional y estático',
      'Diseño responsive',
      'Optimización de carga',
      'Formulario de contacto',
      'Hosting y SSL',
      'Lista para integrar a futuro CRM y Chatbot',
      '30 días de garantía y mantenimiento',
    ],
    highlight: false,
  },
  {
    n: '02',
    name: 'Web + CRM + Chatbot',
    price: 'US$ 850',
    desc: 'Web similar a esta, orientada a conversión.',
    features: [
      'Diseño único',
      'Animaciones',
      'Diseño responsive',
      'Hasta 4 secciones adicionales',
      'Optimización de carga',
      'Formulario de contacto',
      'Hosting y SSL',
      '30 días de garantía y mantenimiento',
    ],
    highlight: true,
  },
  {
    n: '03',
    name: 'Web + CRM + Chatbot + Automatizaciones 24/7',
    price: 'US$ 1.500',
    desc: 'Suite completa: web + CRM + chatbot + automatizaciones trabajando 24/7.',
    features: [
      'Diseño personalizado',
      'Diseño responsive',
      'Ingreso de 10 productos',
      'Optimización SEO para productos',
      'Optimización de carga',
      'Integración con redes sociales',
      'Formulario de contacto',
      'Hosting y SSL',
      '30 días de garantía y mantenimiento',
    ],
    highlight: false,
  },
]

function whatsappUrl(planName: string, price: string) {
  const message = encodeURIComponent(`Hola! Quiero consultar por el plan ${planName} (${price}).`)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}

export function ServiciosSection() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-5 py-28 sm:px-8 md:px-10">
      <FadeIn>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-500">Servicio / Precio</p>
        <h2 className="mt-3 font-display text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl">
          Empezá por donde estés hoy
        </h2>
      </FadeIn>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {TIERS.map((tier, i) => (
          <FadeIn key={tier.name} delay={i * 0.1}>
            <div
              className={`flex h-full flex-col gap-4 rounded-[28px] border p-8 ${
                tier.highlight
                  ? 'border-cyan-500/40 bg-surface-2 shadow-[0_8px_24px_rgba(0,0,0,0.5),0_0_20px_rgba(47,216,204,0.15)]'
                  : 'border-border-hairline bg-surface-1 shadow-[0_1px_2px_rgba(0,0,0,0.4),0_0_0_1px_rgba(232,237,240,0.06)]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-bold text-cyan-500">{tier.n}</span>
                {tier.highlight && (
                  <span className="w-fit rounded-full bg-cyan-900 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-cyan-100">
                    Más elegida
                  </span>
                )}
              </div>
              <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-text-primary">
                {tier.name}
              </h3>
              <p className="font-body text-sm leading-relaxed text-text-secondary">{tier.desc}</p>
              <p className="font-display text-3xl font-bold text-text-primary sm:text-4xl">{tier.price}</p>

              <ul className="flex flex-1 flex-col gap-2.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-cyan-500" />
                    <span className="font-body text-sm leading-snug text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappUrl(tier.name, tier.price)}
                target="_blank"
                rel="noreferrer"
                className={`mt-2 inline-flex items-center justify-center rounded-full px-6 py-3 font-display text-xs font-semibold uppercase tracking-wide transition-colors ${
                  tier.highlight
                    ? 'border-[1.5px] border-cyan-500 bg-cyan-900/40 text-text-primary hover:bg-cyan-900/70'
                    : 'border-[1.5px] border-cyan-500/40 text-text-primary hover:border-cyan-500 hover:bg-cyan-900/40'
                }`}
              >
                Consultar por WhatsApp
              </a>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.4} className="mt-10 max-w-prose">
        <p className="font-body text-base text-text-secondary">
          Estos son los precios de referencia para el proyecto base. Si tu caso necesita algo más específico, lo
          vemos en la primera llamada — sin costo ni compromiso.
        </p>
      </FadeIn>
    </section>
  )
}
