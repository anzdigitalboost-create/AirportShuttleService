/** @type {import('tailwindcss').Config} */

// Airport Shuttle Service palette — terminal wayfinding: near-black, signage
// yellow and azure. Token names (brand / ink / sun) are shared with the
// sibling storefronts so shared components re-theme without edits.
// brand DEFAULT is 5.6:1 on white; `sun` is a background/dark-surface colour
// only — never yellow text on a light background.
const brand = {
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
        // `gold` at the brand palette re-themes it without touching the files.
        gold: brand,
        ink: { DEFAULT: '#0B0D12', 800: '#151922', 700: '#3A4150' },
        sun: { DEFAULT: '#FFD100', 600: '#E6BC00' },
        paper: { DEFAULT: '#F4F5F7', 200: '#E9EBEF', 300: '#D5D9E0' },
      },
      fontFamily: {
        sans: ['Barlow', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Barlow Condensed"', 'Barlow', 'system-ui', 'sans-serif'],
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
