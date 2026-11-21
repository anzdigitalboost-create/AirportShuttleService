/** @type {import('tailwindcss').Config} */

// Airport Shuttle Service palette — brutalist: signal yellow, black, white.
// Token names (brand / ink / sun / paper) are shared with the sibling
// storefronts so shared components re-theme without edits.
// `brand` is black here. `booking` is the azure the mirrored booking page
// needs: that page has both white and near-black sections, so its accent
// cannot be black (see `gold` below).
const brand = {
  DEFAULT: '#111111',
  50: '#FFF9D6',
  100: '#FFF2A8',
  200: '#FFE14D',
  300: '#F5D000',
  400: '#111111',
  500: '#000000',
  600: '#000000',
  700: '#000000',
  800: '#000000',
  900: '#000000',
}
const booking = {
  DEFAULT: '#1D5FD1',
  50: '#EEF4FF',
  100: '#DBE7FE',
  200: '#BFD3FE',
  300: '#93B4FD',
  400: '#1D5FD1',
  500: '#1A4FB0',
  600: '#153F8C',
  700: '#11326F',
  800: '#0D2552',
  900: '#081836',
}

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        brand,
        // The mirrored booking page (copied verbatim from bookaride.co.nz and
        // never edited here) styles itself with `gold-*` classes. Pointing
        // `gold` at a palette here re-themes it without touching the files.
        gold: booking,
        ink: { DEFAULT: '#000000', 800: '#111111', 700: '#222222' },
        sun: { DEFAULT: '#FFE14D', 600: '#F5D000' },
        paper: { DEFAULT: '#FFE14D', 200: '#FFF2A8', 300: '#000000' },
      },
      fontFamily: {
        sans: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        display: ['"Archivo Black"', 'Impact', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideDown: { '0%': { opacity: '0', transform: 'translateY(-10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
