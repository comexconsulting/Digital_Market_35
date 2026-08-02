import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { QUIZ_QUESTIONS, getTierForScore } from '../data/quiz'
import { Button } from './Button'

const WHATSAPP_NUMBER = '51985721349'

type Step = 'intro' | 'contact' | number | 'result'

interface QuizModalProps {
  open: boolean
  onClose: () => void
  onBookDemo: () => void
}

export function QuizModal({ open, onClose, onBookDemo }: QuizModalProps) {
  const [step, setStep] = useState<Step>('intro')
  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [answers, setAnswers] = useState<number[]>([])
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    setStep('intro')
    setName('')
    setWhatsapp('')
    setAnswers([])
    const onKeyDown = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKeyDown)
    dialogRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  const score = answers.reduce((sum, a) => sum + a, 0)
  const tier = getTierForScore(score)
  const currentQuestionIndex = typeof step === 'number' ? step : -1

  const answerQuestion = (points: number) => {
    const next = [...answers, points]
    setAnswers(next)
    if (currentQuestionIndex + 1 < QUIZ_QUESTIONS.length) {
      setStep(currentQuestionIndex + 1)
    } else {
      setStep('result')
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-surface-base/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Test de madurez digital"
            tabIndex={-1}
            className="relative flex max-h-[85vh] w-full max-w-lg flex-col overflow-y-auto rounded-[32px] border border-border-strong bg-surface-1 p-8 shadow-[0_20px_40px_rgba(0,0,0,0.55),0_0_32px_rgba(47,216,204,0.2)] sm:p-10"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-surface-2 text-text-primary hover:bg-surface-3"
            >
              <X size={20} />
            </button>

            {step === 'intro' && (
              <div className="flex flex-col gap-5 pt-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-500">Test de 3 minutos</p>
                <h3 className="font-display text-2xl font-bold text-text-primary sm:text-3xl">
                  ¿Qué tan digitalizada está tu pyme?
                </h3>
                <p className="font-body text-base text-text-secondary">
                  12 preguntas sobre cómo atendés hoy a tus clientes. Al final te recomendamos exactamente por dónde
                  arrancar.
                </p>
                <Button variant="primary" onClick={() => setStep('contact')} className="mt-2 w-fit">
                  Empezar
                </Button>
              </div>
            )}

            {step === 'contact' && (
              <form
                className="flex flex-col gap-5 pt-6"
                onSubmit={(e) => {
                  e.preventDefault()
                  setStep(0)
                }}
              >
                <h3 className="font-display text-xl font-bold text-text-primary">Antes de arrancar</h3>
                <label className="flex flex-col gap-2 font-body text-sm text-text-secondary">
                  Nombre
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-xl border border-border-strong bg-surface-2 px-4 py-3 font-body text-text-primary outline-none focus-visible:border-cyan-500"
                    placeholder="Tu nombre"
                  />
                </label>
                <label className="flex flex-col gap-2 font-body text-sm text-text-secondary">
                  WhatsApp
                  <input
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="rounded-xl border border-border-strong bg-surface-2 px-4 py-3 font-body text-text-primary outline-none focus-visible:border-cyan-500"
                    placeholder="+51 9..."
                  />
                </label>
                <Button variant="primary" type="submit" className="mt-2 w-fit">
                  Empezar test
                </Button>
              </form>
            )}

            {typeof step === 'number' && (
              <div className="flex flex-col gap-6 pt-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-text-tertiary">
                    Pregunta {step + 1} de {QUIZ_QUESTIONS.length} · {QUIZ_QUESTIONS[step].category}
                  </p>
                  <div className="mt-2 h-1 w-full rounded-full bg-surface-3">
                    <div
                      className="h-1 rounded-full bg-cyan-500 transition-all duration-300"
                      style={{ width: `${((step + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                    />
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-text-primary sm:text-2xl">
                  {QUIZ_QUESTIONS[step].question}
                </h3>
                <div className="flex flex-col gap-3">
                  {QUIZ_QUESTIONS[step].options.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => answerQuestion(opt.points)}
                      className="rounded-2xl border border-border-hairline bg-surface-2 px-5 py-4 text-left font-body text-text-primary transition-colors hover:border-cyan-500/40 hover:bg-surface-3"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 'result' && (
              <div className="flex flex-col gap-5 pt-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-500">Tu resultado</p>
                <h3 className="hero-heading font-display text-3xl font-black uppercase sm:text-4xl">{tier.name}</h3>
                <p className="font-body text-base leading-relaxed text-text-secondary">{tier.message}</p>
                <p className="font-mono text-xs uppercase tracking-wide text-text-tertiary">
                  Recomendación: {tier.recommends}
                </p>
                <div className="mt-2 flex flex-wrap gap-3">
                  <Button variant="primary" onClick={onBookDemo}>
                    Agendá tu demo
                  </Button>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      `${tier.whatsappMessage} Me llamo ${name || '(sin nombre)'}.`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border-[1.5px] border-cyan-500/40 px-8 py-3.5 font-display text-xs font-semibold uppercase tracking-wide text-text-primary hover:bg-cyan-900/40 hover:border-cyan-500"
                  >
                    Seguir por WhatsApp
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
