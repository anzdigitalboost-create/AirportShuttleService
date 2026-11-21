import { cn } from '../lib/cn'

/** Black block with a yellow up-right arrow — same artwork as public/favicon.svg. */
export function LogoMark({ className = 'h-9 w-9' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" fill="#000" />
      <path d="M8 24 24 8M12.5 8H24v11.5" fill="none" stroke="#FFE14D" strokeWidth="3.6" strokeLinecap="square" />
    </svg>
  )
}

/** Full logo: mark + heavy uppercase wordmark. `light` is for dark backgrounds. */
export default function Logo({ light = false, className = '' }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark />
      <span className={cn('font-display uppercase leading-[0.95] text-[15px] sm:text-base', light ? 'text-white' : 'text-ink')}>
        <span className="block">Airport</span>
        <span className="block">Shuttle_Service</span>
      </span>
    </span>
  )
}
