import { FadeIn } from '../components/FadeIn'

export function ProblemaSection() {
  return (
    <section id="problema" className="mx-auto max-w-4xl px-5 py-28 sm:px-8 md:px-10">
      <FadeIn>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-500">El problema</p>
      </FadeIn>

      <FadeIn delay={0.05} className="mt-4">
        <h2 className="font-display text-3xl font-bold leading-tight text-text-primary sm:text-4xl md:text-5xl">
          ¿Seguís atendiendo clientes por WhatsApp a mano, con un Excel como CRM y una web que hace años que no
          actualizás?
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-10 rounded-3xl border border-border-hairline bg-surface-1 p-6 sm:p-8">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-text-tertiary">
          Ejemplo ilustrativo — no es un caso real de cliente
        </p>
        <p className="mt-4 font-body text-base leading-relaxed text-text-secondary sm:text-lg">
          Son las 20:47 de un viernes. En cinco minutos te escriben tres personas por WhatsApp: una pregunta por un
          producto, otra quiere agendar un turno, la tercera solo quiere el precio. Estás atendiendo a alguien en el
          local. Contestás la primera, la segunda queda en &ldquo;visto&rdquo;, la tercera se cansa de esperar y le
          escribe a la competencia. No la perdiste por mal servicio — la perdiste porque no llegaste a tiempo.
        </p>
      </FadeIn>

      <FadeIn delay={0.25} className="mt-8">
        <p className="max-w-prose font-body text-base leading-relaxed text-text-secondary">
          Cada mes que seguís atendiendo todo a mano no es solo tiempo perdido — son clientes que se van con el
          primero que les contesta rápido. Y la brecha con los que ya usan IA no para de crecer.
        </p>
      </FadeIn>
    </section>
  )
}
