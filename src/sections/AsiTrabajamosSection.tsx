import { ExternalLink } from 'lucide-react'
import { FadeIn } from '../components/FadeIn'
import comexThumb from '../assets/portfolio-comex.jpg'
import estiloThumb from '../assets/portfolio-estilo.jpg'

const STACK = ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']

/**
 * Proyectos reales de portfolio. Se muestran SOLO cuando el dueño de cada uno confirma el OK —
 * ver docs/CREATE-WEBSITE-PLAN.md. Ambos confirmados por el usuario (2026-08-02): a los dueños no
 * les molesta que se usen como ejemplo. La sección sigue funcionando completa aunque este arreglo
 * quede vacío en el futuro (decisión de la Fase 10 — Steve Jobs review).
 */
const PROYECTOS: { name: string; category: string; url: string; thumb: string }[] = [
  {
    name: 'Comex Consulting',
    category: 'Asesoría en comercio exterior',
    url: 'https://agente-web-seguridad.vercel.app/',
    thumb: comexThumb,
  },
  {
    name: 'Estilo con Altura',
    category: 'Indumentaria de montaña',
    url: 'https://estilo-con-altura.vercel.app/',
    thumb: estiloThumb,
  },
]

export function AsiTrabajamosSection() {
  return (
    <section id="proyectos" className="mx-auto max-w-5xl px-5 py-28 sm:px-8 md:px-10">
      <FadeIn>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-500">Así trabajamos</p>
        <h2 className="mt-3 font-display text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl">
          Sin plantillas, con un proceso real
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} className="mt-8 max-w-prose">
        <p className="font-body text-base leading-relaxed text-text-secondary">
          Construimos con el mismo stack que le mostramos en la llamada: nada de plantillas armadas de antemano.
          Cada proyecto se piensa desde cero para tu marca.
        </p>
      </FadeIn>

      <FadeIn delay={0.2} className="mt-6 flex flex-wrap gap-3">
        {STACK.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border-strong bg-surface-1 px-4 py-2 font-mono text-xs uppercase tracking-wide text-text-secondary"
          >
            {tech}
          </span>
        ))}
      </FadeIn>

      {PROYECTOS.length > 0 && (
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROYECTOS.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.1}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col overflow-hidden rounded-[28px] border border-border-hairline bg-surface-1 transition-colors hover:border-cyan-500/30"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={p.thumb}
                    alt=""
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/10 to-transparent" />
                </div>
                <div className="flex items-center justify-between p-6 pt-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-text-primary">{p.name}</h3>
                    <p className="font-body text-sm text-text-tertiary">{p.category}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-cyan-500/40 px-4 py-2 font-display text-xs font-semibold uppercase tracking-wide text-text-primary transition-colors group-hover:border-cyan-500 group-hover:bg-cyan-900/40">
                    Ver sitio <ExternalLink size={13} />
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      )}

      <FadeIn delay={0.3} className="mt-10 rounded-2xl border border-cyan-500/20 bg-surface-1 p-6">
        <p className="font-body text-base leading-relaxed text-text-primary">
          Probalo vos mismo: agendá la llamada de 20 minutos y te mostramos en vivo cómo respondería a un cliente
          tuyo real.
        </p>
      </FadeIn>
    </section>
  )
}
