import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

const WHATSAPP_NUMBER = '51985721349'
const MESSAGE = encodeURIComponent('Hola! Quiero saber más sobre Digital_Market_35.')
const GLOW = '#3EF08C'
const SPARK = '#E9FFF3'

const BUBBLE_PATH =
  'M16 4.5c-6.35 0-11.5 5.15-11.5 11.5 0 2.03.53 3.97 1.53 5.68L4.5 27.5l5.98-1.5A11.44 11.44 0 0 0 16 27.5c6.35 0 11.5-5.15 11.5-11.5S22.35 4.5 16 4.5Z'

const HANDSET_PATH =
  'M11.8 11.2c.28-.6.57-.62.83-.63.22-.01.47-.01.68.01.22.02.51-.08.8.62.3.72.99 2.5 1.08 2.68.09.18.15.39.03.63-.12.24-.18.39-.36.6-.18.2-.37.45-.53.6-.18.18-.36.37-.16.72.21.35.92 1.53 1.98 2.48 1.36 1.22 2.5 1.6 2.85 1.78.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.42.24-.36.48-.3.79-.18.32.12 2.04.97 2.39 1.14.36.18.6.27.68.42.09.15.09.87-.2 1.7-.29.85-1.68 1.62-2.35 1.72-.6.1-1.35.14-2.18-.14a19.5 19.5 0 0 1-1.98-.73c-3.48-1.51-5.75-5.02-5.93-5.26-.18-.24-1.42-1.89-1.42-3.6 0-1.72.9-2.56 1.22-2.91.32-.36.7-.44.94-.44Z'

// Chispas eléctricas: pequeños rayos que aparecen y desaparecen cerca del borde de la burbuja.
const SPARKS = [
  { d: 'M26.5 7 L28.7 9.6 L27 9.6 L29 12.6', delay: 0, repeatDelay: 2.8 },
  { d: 'M3.5 15 L6 18 L4.4 18 L6.6 21.2', delay: 0.9, repeatDelay: 3.4 },
  { d: 'M14 27.5 L16.6 30 L15 30 L17.2 32.5', delay: 1.8, repeatDelay: 3.1 },
]

function NeonWhatsAppIcon() {
  const reduced = useReducedMotion()

  if (reduced) {
    return (
      <svg viewBox="0 0 32 32" width={28} height={28} fill="none" style={{ filter: `drop-shadow(0 0 5px ${GLOW})` }}>
        <path d={BUBBLE_PATH} stroke={GLOW} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
        <path d={HANDSET_PATH} fill={GLOW} opacity={0.9} />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 32 32" width={28} height={28} fill="none" overflow="visible">
      {/* Contorno base, tenue */}
      <path d={BUBBLE_PATH} stroke={GLOW} strokeOpacity={0.4} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />

      {/* Corriente viajando por el contorno */}
      <motion.path
        d={BUBBLE_PATH}
        stroke={SPARK}
        strokeWidth={2}
        strokeLinecap="round"
        pathLength={100}
        strokeDasharray="14 86"
        style={{ filter: `drop-shadow(0 0 4px ${GLOW})` }}
        animate={{ strokeDashoffset: [0, -100] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
      />

      <path d={HANDSET_PATH} fill={GLOW} opacity={0.9} style={{ filter: `drop-shadow(0 0 3px ${GLOW})` }} />

      {/* Chispas */}
      {SPARKS.map((spark, i) => (
        <motion.path
          key={i}
          d={spark.d}
          stroke={SPARK}
          strokeWidth={1.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: `drop-shadow(0 0 3px ${GLOW})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.3, 1, 0] }}
          transition={{ duration: 0.35, repeat: Infinity, repeatDelay: spark.repeatDelay, delay: spark.delay }}
        />
      ))}
    </svg>
  )
}

export function WhatsAppButton() {
  const reduced = useReducedMotion()

  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center overflow-visible rounded-full border border-white/10 bg-surface-2/90 backdrop-blur-sm sm:bottom-6 sm:right-6"
      animate={reduced ? undefined : { scale: [1, 1.04, 1] }}
      transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.12 }}
    >
      <NeonWhatsAppIcon />
    </motion.a>
  )
}
