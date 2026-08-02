import { useRef, useState, type ReactNode } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
  className?: string
}

/** Efecto magnético: el elemento se desplaza sutilmente hacia el cursor.
 * Progresivo por diseño — en touch/reduced-motion no hace nada, la UI sigue funcionando igual. */
export function Magnet({ children, padding = 140, strength = 5, className }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState({ x: 0, y: 0, active: false })
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    const dist = Math.sqrt(dx * dx + dy * dy)
    const reach = Math.max(rect.width, rect.height) / 2 + padding

    if (dist < reach) {
      setTransform({ x: dx / strength, y: dy / strength, active: true })
    } else if (transform.active) {
      setTransform({ x: 0, y: 0, active: false })
    }
  }

  const handleMouseLeave = () => setTransform({ x: 0, y: 0, active: false })

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        transition: transform.active ? 'transform 0.3s ease-out' : 'transform 0.6s ease-in-out',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}
