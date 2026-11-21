import { cn } from '../lib/cn'

/** Wayfinding-sign mark — same artwork as public/favicon.svg. */
export function LogoMark({ className = 'h-10 w-10' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="3" fill="#FFD100" />
      <path d="M8 24 24 8M12.5 8H24v11.5" fill="none" stroke="#0B0D12" strokeWidth="3.6" strokeLinecap="square" />
    </svg>
  )
}

/** Full logo: mark + two-line condensed wordmark. `light` is for dark backgrounds. */
export default function Logo({ light = false, className = '' }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark />
      <span className={cn('font-display font-bold uppercase leading-[0.9] tracking-wide', light ? 'text-white' : 'text-ink')}>
        <span className={cn('block text-[0.8rem] tracking-[0.2em]', light ? 'text-sun' : 'text-brand')}>Airport</span>
        <span className="block text-xl">Shuttle Service</span>
      </span>
    </span>
  )
}
