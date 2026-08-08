import { Gauge } from 'lucide-react'
import { FadeIn } from '../components/FadeIn'
import { Button } from '../components/Button'

interface QuizTeaserSectionProps {
  onOpenQuiz: () => void
}

export function QuizTeaserSection({ onOpenQuiz }: QuizTeaserSectionProps) {
  return (
    <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8 md:px-10">
      <FadeIn
        className="flex flex-col items-start gap-5 rounded-[32px] border border-cyan-500/40 bg-[linear-gradient(135deg,rgba(14,77,72,0.35),var(--color-surface-2)_60%)] p-8 shadow-[0_8px_24px_rgba(0,0,0,0.5),0_0_36px_rgba(47,216,204,0.2)] sm:p-10"
      >
        <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-900 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-cyan-100">
          <Gauge size={12} />
          Test de 3 minutos
        </span>
        <h2 className="font-display text-2xl font-bold text-text-primary sm:text-3xl">
          ¿Qué tan digitalizada está tu pyme?
        </h2>
        <p className="max-w-prose font-body text-base text-text-secondary">
          12 preguntas rápidas y te decimos exactamente por dónde arrancar: web, CRM+chatbot, o el sistema completo.
        </p>
        <Button variant="secondary" onClick={onOpenQuiz}>
          Hacer el test
        </Button>
      </FadeIn>
    </section>
  )
}
