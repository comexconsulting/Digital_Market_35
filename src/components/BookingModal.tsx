import { useEffect, useRef, useState } from 'react'
import { X, MessageCircle } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

// Parámetros de color propios de Calendly — tiñen el calendario con nuestra paleta.
// El banner de cookies queda igual (lo maneja Calendly por requisito legal), pero el
// calendario en sí deja de ser celeste/blanco default una vez que lo cierran.
const CALENDLY_URL =
  'https://calendly.com/importacionesjavier4/30min?background_color=0a0b0d&text_color=e8edf0&primary_color=2fd8cc'
const WHATSAPP_NUMBER = '51985721349'
const WHATSAPP_FALLBACK_MSG = encodeURIComponent(
  'Hola! Quiero agendar una demo de 20 minutos pero no pude cargar el calendario en la web.',
)
const LOAD_TIMEOUT_MS = 6000

interface BookingModalProps {
  open: boolean
  onClose: () => void
}

export function BookingModal({ open, onClose }: BookingModalProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')
  const dialogRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!open) return

    setStatus('loading')
    timeoutRef.current = setTimeout(() => setStatus((s) => (s === 'loaded' ? s : 'error')), LOAD_TIMEOUT_MS)

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    dialogRef.current?.focus()
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-surface-base/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose()
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Agendar demo"
            tabIndex={-1}
            className="relative flex h-[85vh] w-full max-w-xl flex-col overflow-hidden rounded-[32px] border border-border-strong bg-surface-1 shadow-[0_20px_40px_rgba(0,0,0,0.55),0_0_32px_rgba(47,216,204,0.2)]"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-surface-2 text-text-primary hover:bg-surface-3"
            >
              <X size={20} />
            </button>

            {status !== 'loaded' && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center">
                {status === 'loading' && (
                  <>
                    <span
                      className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-500 border-t-transparent"
                      aria-hidden="true"
                    />
                    <p className="font-body text-sm text-text-secondary">Abriendo calendario…</p>
                  </>
                )}
                {status === 'error' && (
                  <>
                    <p className="font-display text-lg font-semibold text-text-primary">
                      No pudimos cargar el calendario
                    </p>
                    <p className="max-w-xs font-body text-sm text-text-secondary">
                      Escribinos por WhatsApp y coordinamos directo.
                    </p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_FALLBACK_MSG}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 font-display text-xs font-semibold uppercase tracking-wide text-surface-base"
                    >
                      <MessageCircle size={16} /> Escribir por WhatsApp
                    </a>
                  </>
                )}
              </div>
            )}

            <iframe
              title="Agendar demo con Digital_Market_35"
              src={CALENDLY_URL}
              className={`h-full w-full flex-1 border-0 transition-opacity duration-300 ${
                status === 'loaded' ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current)
                setStatus('loaded')
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
