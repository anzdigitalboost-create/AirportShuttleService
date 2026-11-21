// Site identity for airportshuttleservice.co.nz — the one place the brand name,
// domain and contact details are defined. Imported by the app, by the
// mirrored booking page (src/pages/BookNow.jsx), by SEO.jsx and by the
// prerender script, so it must stay plain data with a default export.
export const PHONE_DISPLAY = '022 355 2808'
export const PHONE_TEL = '+64223552808'
export const EMAIL = 'info@bookaride.co.nz'

const siteConfig = {
  siteName: 'Airport Shuttle Service',
  domain: 'airportshuttleservice.co.nz',
  siteUrl: 'https://www.airportshuttleservice.co.nz',
  defaultTitle: 'Airport Shuttle Service — Auckland Airport, Door to Door',
  darkHeader: true,
  email: EMAIL,
  phone: PHONE_TEL,
  phoneDisplay: PHONE_DISPLAY,
  operator: 'Book A Ride NZ',
  tagline: 'Private Auckland Airport Transfers',
  description:
    'Airport Shuttle Service runs private door-to-door transfers to and from Auckland Airport, 24/7. Flight tracking, free waiting time and a fixed price. Book online in 60 seconds.',
  keywords: 'airport shuttle service, Auckland airport shuttle service, shuttle to Auckland airport, shuttle from Auckland airport',
  address: 'Auckland, New Zealand',
  logo: '/favicon.svg',
  favicon: '/favicon.svg',
  primaryColor: 'brand',
}

export const getSiteConfig = () => siteConfig

export default siteConfig
