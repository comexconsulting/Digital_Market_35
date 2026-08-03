import { FadeIn } from '../components/FadeIn'

const STATS = [
  {
    value: '3',
    label: 'Escalones',
    description: 'Entrada, Core y Premium: sumás CRM, chatbot y automatización sin rehacer nada.',
  },
  {
    value: '100%',
    label: 'Responsive',
    description: 'Diseños adaptados para celular, tablet y escritorio.',
  },
  {
    value: '4',
    label: 'Tecnologías',
    description: 'React, TypeScript, Tailwind CSS y Framer Motion.',
  },
  {
    value: '1 año',
    label: 'Hosting incluido',
    description: 'En los 3 escalones, listo para publicar tu web.',
  },
]

export function StatsSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:px-10">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
        {STATS.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.08}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-border-hairline bg-surface-1 p-6">
              <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-2xl bg-cyan-500/10 blur-2xl" />
              <p className="font-display text-4xl font-bold text-cyan-500 sm:text-5xl">{s.value}</p>
              <p className="mt-3 font-body text-sm font-semibold text-text-primary">{s.label}</p>
              <p className="mt-1 font-body text-sm leading-relaxed text-text-tertiary">{s.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
