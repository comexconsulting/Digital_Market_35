import { motion } from 'framer-motion'
import { ArrowRight, Check, MessageCircle } from 'lucide-react'
import { Button } from '../components/Button'
import { FadeIn } from '../components/FadeIn'
import { Magnet } from '../components/Magnet'
import { useReducedMotion } from '../hooks/useReducedMotion'
import heroAndroid from '../assets/hero-android.jpg'

const EASE = [0.16, 1, 0.3, 1] as const

interface HeroSectionProps {
  onBookDemo: () => void
}

function ChatBubbleAccent() {
  const reduced = useReducedMotion()
  const bubbleDelay = reduced ? 0 : 0.9
  const rescueDelay = reduced ? 0 : 1.7

  return (
    <motion.div
      className="flex flex-col gap-2 rounded-2xl rounded-bl-sm border border-border-strong bg-surface-2/90 px-5 py-4 shadow-[0_20px_40px_rgba(0,0,0,0.55),0_0_28px_rgba(47,216,204,0.15)] backdrop-blur-sm"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: bubbleDelay, duration: 0.4, ease: EASE }}
    >
      <div className="flex items-center gap-2">
        <MessageCircle size={16} className="text-text-tertiary" />
        <span className="font-mono text-[0.65rem] text-text-tertiary">23:41</span>
      </div>
      <p className="font-body text-sm text-text-secondary">¿Tenés turno para mañana?</p>

      <motion.div
        className="flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: rescueDelay, duration: 0.3 }}
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: rescueDelay, duration: 0.35, ease: EASE }}
          className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-surface-base"
        >
          <Check size={11} strokeWidth={3} />
        </motion.span>
        <span className="text-cyan-500">respondido</span>
      </motion.div>
    </motion.div>
  )
}

export function HeroSection({ onBookDemo }: HeroSectionProps) {
  const reduced = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen flex-col justify-between overflow-hidden pt-28 pb-10"
    >
      {/* Fondo: video en loop con movimiento sutil (manos escribiendo, nube pulsando) — imagen estática si prefers-reduced-motion */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {reduced ? (
          <img src={heroAndroid} alt="" className="h-full w-full object-cover object-[68%_center]" />
        ) : (
          <video
            className="h-full w-full object-cover object-[68%_center]"
            src="/video/hero-android.mp4"
            poster={heroAndroid}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        )}
        {/* Degradado: oscuro sólido a la izquierda (donde va el texto) hacia transparente a la derecha */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface-base via-surface-base/85 to-surface-base/10 sm:via-surface-base/70" />
        {/* Vignette superior/inferior para que el header y el borde inferior no corten en seco */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-base/70 via-transparent to-surface-base/90" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-10 px-5 sm:px-8 md:px-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col items-start gap-6 text-left">
          <FadeIn delay={0} y={-16}>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-500 sm:text-sm">
              Mientras dormís, alguien ya le vendió a tu cliente.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} y={30} className="w-full overflow-hidden">
            <h1 className="hero-heading text-balance font-display font-black uppercase leading-[0.95] tracking-[-0.03em] text-[13vw] sm:text-[10vw] lg:text-[6.2vw]">
              Ningún cliente se escapa
            </h1>
          </FadeIn>

          <FadeIn delay={0.35} y={20}>
            <p className="max-w-[42ch] font-body text-lg leading-snug text-text-secondary sm:text-xl">
              De perder pedidos porque nadie contesta el WhatsApp a tiempo, a que ninguno se te escape — ni a las 11
              de la noche. La única agencia que arma tu web pensada para escalar a CRM, chatbot y automatización —
              sin rehacer nada cuando estés listo para sumar más.
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20} className="flex flex-wrap items-center gap-4 pt-2">
            <Button variant="primary" onClick={onBookDemo}>
              Agendá tu demo
            </Button>
            <Button
              variant="secondary"
              onClick={() => document.querySelector('#proceso')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver cómo trabajamos
            </Button>
          </FadeIn>

          <FadeIn delay={0.6} y={16}>
            <a
              href="#proyectos"
              className="inline-flex items-center gap-1.5 font-body text-sm text-cyan-500 underline decoration-cyan-500/30 underline-offset-4 transition-colors hover:decoration-cyan-500"
            >
              Ver casos de éxito <ArrowRight size={14} />
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={0.9} y={20} className="flex justify-center lg:justify-end lg:self-end lg:pb-10">
          <Magnet padding={140} strength={8} className="w-full max-w-[280px]">
            <ChatBubbleAccent />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  )
}
