import { FadeIn } from '../components/FadeIn'
import { Button } from '../components/Button'

interface QuizTeaserSectionProps {
  onOpenQuiz: () => void
}

export function QuizTeaserSection({ onOpenQuiz }: QuizTeaserSectionProps) {
  return (
    <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8 md:px-10">
      <FadeIn className="flex flex-col items-start gap-5 rounded-[32px] border border-cyan-500/20 bg-surface-1 p-8 sm:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-500">Test de 3 minutos</p>
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
