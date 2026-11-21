import { cn } from '../lib/cn'

/** Rounded indigo tile with an up-right arrow — same artwork as public/favicon.svg. */
export function LogoMark({ className = 'h-9 w-9' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="12" fill="#4B3FD6" />
      <path d="M9 22.5 22.5 9M13 9h9.5v9.5" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Full logo: mark + lowercase rounded wordmark. `light` is for dark backgrounds. */
export default function Logo({ light = false, className = '' }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark />
      <span className={cn('font-display font-black lowercase leading-none text-[17px] sm:text-xl tracking-tight', light ? 'text-white' : 'text-ink')}>
        Airport Shuttle Service
      </span>
    </span>
  )
}
