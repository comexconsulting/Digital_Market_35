import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
  as?: 'div' | 'span' | 'li'
}

const EASE = [0.25, 0.1, 0.25, 1] as const

export function FadeIn({ children, delay = 0, duration = 0.7, x = 0, y = 30, className, as = 'div' }: FadeInProps) {
  const reduced = useReducedMotion()
  const MotionTag = motion.create(as)

  if (reduced) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: EASE }}
    >
      {children}
    </MotionTag>
  )
}
