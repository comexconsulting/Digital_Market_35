import { FadeIn } from '../components/FadeIn'

const TIERS = [
  {
    n: '01',
    name: 'Entrada',
    desc: 'Web profesional, con la base lista para integrar CRM y chatbot después.',
    highlight: false,
  },
  {
    n: '02',
    name: 'Core',
    desc: 'Web + CRM + Chatbot conectados entre sí, atendiendo y siguiendo cada lead solos.',
    highlight: true,
  },
  {
    n: '03',
    name: 'Premium',
    desc: 'Suite completa: web + CRM + chatbot + automatizaciones trabajando 24/7.',
    highlight: false,
  },
]

export function ServiciosSection() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-5 py-28 sm:px-8 md:px-10">
      <FadeIn>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-500">Servicios</p>
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
              <p className="font-body text-base leading-relaxed text-text-secondary">{tier.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.4} className="mt-10 max-w-prose">
        <p className="font-body text-base text-text-secondary">
          Cada proyecto tiene un precio a medida — por eso arrancamos con una charla gratis, no con un número
          genérico que no te va a servir. Y no hace falta que aprendas nada técnico: nosotros nos encargamos.
        </p>
      </FadeIn>
    </section>
  )
}
