import { FadeIn } from '../components/FadeIn'
import nosotrosAndroid from '../assets/nosotros-android.jpg'

export function NosotrosSection() {
  return (
    <section id="nosotros" className="relative overflow-hidden py-28">
      {/* Retrato que sangra desde el borde derecho, detrás del texto — oculto en mobile para no arriesgar legibilidad */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[420px] md:block lg:w-[520px]"
        style={{
          maskImage: 'linear-gradient(to left, black 40%, transparent 95%)',
          WebkitMaskImage: 'linear-gradient(to left, black 40%, transparent 95%)',
        }}
        aria-hidden="true"
      >
        <img src={nosotrosAndroid} alt="" className="h-full w-full object-cover opacity-50" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 md:px-10">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-500">Nosotros</p>
        </FadeIn>

        <FadeIn delay={0.05} className="mt-4">
          <p className="font-display text-2xl font-medium leading-snug text-text-primary sm:text-3xl">
            Sabemos lo que es atender pedidos por WhatsApp a las 11 de la noche y perder el hilo de quién te escribió
            qué.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-8 max-w-prose">
          <p className="font-body text-base leading-relaxed text-text-secondary">
            No importa tu rubro — trabajamos con stack tecnológico real (no plantillas genéricas), un proceso
            transparente de punta a punta, y ya lo hicimos en industrias bien distintas entre sí. La adaptabilidad no
            es una promesa, es cómo trabajamos.
          </p>
        </FadeIn>

        <FadeIn delay={0.25} className="mt-8 max-w-prose rounded-2xl border border-cyan-500/20 bg-surface-1/95 p-6 backdrop-blur-sm">
          <p className="font-body text-base leading-relaxed text-text-primary">
            Probalo vos mismo: agendá la llamada de 20 minutos y te mostramos en vivo cómo respondería a un cliente
            tuyo real.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
