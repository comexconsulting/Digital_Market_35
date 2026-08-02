import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: ReactNode
  loading?: boolean
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold uppercase tracking-wide ' +
  'text-xs sm:text-sm px-8 py-3.5 sm:px-10 sm:py-4 min-h-11 transition-[transform,box-shadow,background-color,border-color] duration-300 ' +
  'disabled:opacity-60 disabled:cursor-not-allowed'

const primary =
  'bg-amber-500 text-surface-base shadow-[0_1px_2px_rgba(0,0,0,0.4),0_0_0_1px_rgba(232,237,240,0.06)] ' +
  'hover:shadow-[0_8px_24px_rgba(0,0,0,0.5),0_0_20px_rgba(255,138,61,0.25)] hover:-translate-y-0.5'

const secondary =
  'bg-transparent text-text-primary border-[1.5px] border-cyan-500/40 hover:bg-cyan-900/40 hover:border-cyan-500'

export function Button({ variant = 'primary', children, loading, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`${base} ${variant === 'primary' ? primary : secondary} ${className}`}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <span
          className="h-3.5 w-3.5 shrink-0 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      )}
      {children}
    </button>
  )
}
