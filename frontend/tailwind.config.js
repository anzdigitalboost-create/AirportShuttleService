/** @type {import('tailwindcss').Config} */

// Airport Shuttle Service palette — soft and rounded: lavender ground,
// indigo, pastel panels. Token names (brand / ink / sun / paper) are shared
// with the sibling storefronts so shared components re-theme without edits.
// brand DEFAULT is 7.0:1 on white and at least 5.7:1 on every pastel below.
// `booking` is the lighter indigo the mirrored booking page uses: that page
// has both white and near-black sections, and this shade reads on both.
const brand = {
  DEFAULT: '#4B3FD6',
  50: '#F3F0FF',
  100: '#E7E2FF',
  200: '#D3CCFF',
  300: '#B4AAFA',
  400: '#4B3FD6',
  500: '#3F34BD',
  600: '#332A9C',
  700: '#23204A',
  800: '#1A1838',
  900: '#121026',
}
const booking = { ...brand, DEFAULT: '#6558F0', 400: '#6558F0', 500: '#5346D8' }

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
        ink: { DEFAULT: '#23204A', 800: '#35325F', 700: '#45427A' },
        sun: { DEFAULT: '#FFE9C7', 600: '#FFD999' },
        mint: '#DDF5E8',
        sky: '#DCE8FF',
        paper: { DEFAULT: '#F3F0FF', 200: '#E7E2FF', 300: '#D3CCFF' },
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Nunito', 'system-ui', '-apple-system', 'sans-serif'],
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
