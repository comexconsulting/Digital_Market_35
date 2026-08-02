import { FadeIn } from '../components/FadeIn'
import robotsBg from '../assets/robots-agents-bg.jpg'

const STEPS = [
  { n: '01', text: 'Agendá una llamada de 20 minutos, sin costo.' },
  { n: '02', text: 'Te armamos un plan a tu medida — empezás por donde estés hoy.' },
  { n: '03', text: 'Lanzamos tu web (o sumamos CRM/chatbot si ya la tenés).' },
  { n: '04', text: 'Vas escalando a tu ritmo, sin rehacer nada.' },
]

export function ProcesoSection() {
  return (
    <section id="proceso" className="relative overflow-hidden py-28">
      {/* Imagen que sangra desde el borde derecho, detrás del contenido — oculta en mobile */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[360px] md:block lg:w-[460px]"
        style={{
          maskImage: 'linear-gradient(to left, black 35%, transparent 90%)',
          WebkitMaskImage: 'linear-gradient(to left, black 35%, transparent 90%)',
        }}
        aria-hidden="true"
      >
        <img src={robotsBg} alt="" className="h-full w-full object-cover opacity-40" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 md:px-10">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-500">Proceso</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl">
            Así se arma, paso a paso
          </h2>
        </FadeIn>

        <div className="mt-12 flex flex-col divide-y divide-border-hairline">
          {STEPS.map((step, i) => (
            <FadeIn key={step.n} delay={i * 0.1}>
              <div className="flex items-center gap-6 py-7">
                <span className="font-mono text-4xl font-bold text-cyan-500 sm:text-5xl">{step.n}</span>
                <p className="font-body text-lg text-text-primary sm:text-xl">{step.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5} className="mt-10">
          <p className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-900/30 px-5 py-2.5 font-body text-sm text-cyan-100">
            Garantía: primera reunión sin costo ni compromiso.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
