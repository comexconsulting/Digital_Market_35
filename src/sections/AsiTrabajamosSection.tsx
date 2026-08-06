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
    url: 'https://comexconsulting.vercel.app/',
    thumb: comexThumb,
  },
  {
    name: 'Estilo con Altura',
    category: 'Indumentaria de montaña',
    url: 'https://estilo-con-altura.vercel.app/',
    thumb: estiloThumb,
  },
]

function MonitorMockup({ src }: { src: string }) {
  return (
    <div className="mx-auto w-full max-w-sm [perspective:1200px]">
      <div className="transition-transform duration-700 ease-out [transform:rotateX(3deg)_rotateY(-9deg)] group-hover:[transform:rotateX(0deg)_rotateY(0deg)]">
        <div className="rounded-xl border-[6px] border-[#262b35] bg-[#262b35] shadow-[0_30px_60px_-18px_rgba(0,0,0,0.65),0_0_70px_-8px_rgba(47,216,204,0.4)]">
          <div className="aspect-[16/10] w-full overflow-hidden rounded-[4px] bg-surface-1">
            <img src={src} alt="" className="h-full w-full object-cover object-top" />
          </div>
        </div>
        <div className="mx-auto h-5 w-3 bg-gradient-to-b from-[#262b35] to-[#0d0e11]" />
        <div className="mx-auto h-2 w-28 rounded-full bg-[#262b35]" />
      </div>
      <div className="mx-auto mt-4 h-3 w-44 rounded-full bg-cyan-500/15 blur-lg" />
    </div>
  )
}

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
        <div className="mt-16">
          <FadeIn>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-500">Recién entregados</p>
          </FadeIn>
          <div className="mt-8 grid grid-cols-1 gap-16 sm:grid-cols-2">
            {PROYECTOS.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.1}>
                <a href={p.url} target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-5">
                  <h3 className="font-display text-lg font-semibold text-text-primary transition-colors group-hover:text-cyan-500">
                    {p.name}
                  </h3>
                  <MonitorMockup src={p.thumb} />
                  <div className="flex flex-col items-center gap-2">
                    <p className="font-body text-sm text-text-tertiary">{p.category}</p>
                    <span className="inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-cyan-500/40 px-4 py-2 font-display text-xs font-semibold uppercase tracking-wide text-text-primary transition-colors group-hover:border-cyan-500 group-hover:bg-cyan-900/40">
                      Ver sitio <ExternalLink size={13} />
                    </span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
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
