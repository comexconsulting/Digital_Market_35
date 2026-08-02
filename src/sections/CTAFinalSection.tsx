import { FadeIn } from '../components/FadeIn'
import { Button } from '../components/Button'
import boardroomBg from '../assets/boardroom-bg.jpg'

interface CTAFinalSectionProps {
  onBookDemo: () => void
}

export function CTAFinalSection({ onBookDemo }: CTAFinalSectionProps) {
  return (
    <section id="cta-final" className="relative isolate overflow-hidden py-32 text-center">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <img src={boardroomBg} alt="" className="h-full w-full object-cover" />
        {/* Vignette centrado: oscuro donde va el texto, la escena se asoma en los bordes */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_center,var(--color-surface-base)_35%,rgb(10_11_13/0.85)_75%,var(--color-surface-base)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8 md:px-10">
        <FadeIn>
          <h2 className="hero-heading font-display text-4xl font-black uppercase leading-tight sm:text-5xl md:text-6xl">
            Imaginá no perder ni un cliente más
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-6">
          <p className="mx-auto max-w-prose font-body text-lg text-text-secondary">
            Imaginá tu negocio respondiendo en segundos, siguiendo cada cliente solo, y vos enterándote de los
            resultados en vez de estar apagando incendios todo el día. Cada día que pasa sin resolverlo, se pierden
            clientes.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-10">
          <Button variant="primary" onClick={onBookDemo}>
            Agendá tu demo
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
