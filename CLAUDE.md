# CLAUDE.md — Airport Shuttle Service (airportshuttleservice.co.nz)

## What this repo is

A storefront operated by Book A Ride NZ, focused on Auckland Airport transfers only (to the airport, from the airport, and per-area airport pages).
React/Vite frontend only — there is **no backend here**. All `/api/*` requests
are proxied by `vercel.json` to the live bookaride.co.nz platform (shared Neon
database, shared admin, shared Stripe). The booking page under
`src/pages/BookNow.jsx` and its components are copied **verbatim** from the
bookaride.co.nz repo — never edit them here (see "Booking page mirror").

Sibling storefronts on the same platform: `ShuttleService` (shuttleservice.co.nz, private and group hire) and `AucklandShuttles` (aucklandshuttles.co.nz), plus
`Bookaridenz` and `Hibiscus-to-airport`.

## Booking page mirror — NO DRIFT

`frontend/scripts/sync-booking.mjs` holds the list of mirrored files and
`frontend/scripts/booking-mirror.json` records the source commit plus a hash
per file.

- `npm run check:booking` runs before every build and **fails the build** if
  any mirrored file differs from the manifest.
- To change anything on the booking page: make the change in
  `Book-A-Ride-Gap-Digital/BookARide`, merge it there, then run
  `cd frontend && npm run sync:booking -- <path-to-BookARide>` here, commit the
  synced files + manifest, and ship.
- Never "fix" a drift failure by editing the mirrored files on this side.
- The mirrored files style themselves with `gold-*` Tailwind classes. In
  `tailwind.config.js`, `gold` is deliberately aliased to the `booking`
  palette. Do not remove that alias.
- This site's origins (www and apex) must be in `resolveFrontendOrigin()` in
  the platform's `api/_lib/payment-link.js`.

## How the site is put together

The structure is shared with the sibling storefront; the look and the words
are this site's own.

- `src/config/siteConfig.js` — name, domain, phone, email, `darkHeader`.
  Import contact details from here; never hard-code them in new UI.
- `src/data/site.js` — `PAGES` (each marketing page as a list of blocks),
  `NAV`, `AREAS`, `REDIRECTS`. Routes, the menu, the footer, the prerender
  snapshots and the sitemap all follow from this file.
  Pages here: `/to-auckland-airport`, `/from-auckland-airport`, and five `/areas/<slug>` pages templated from `area.*`.
- `src/components/pages/ContentPage.jsx` renders any page in `PAGES`;
  `AreaLanding.jsx` renders an area page; `Home.jsx` is this site's own.
- `src/components/Sections.jsx` and `layout/*` use only semantic classes
  (`.card`, `.hero-surface`, `.btn-accent`, …). **The look lives in
  `src/styles/index.css` and `tailwind.config.js`** — restyle there, not by
  adding colour utilities to shared components.
- Theme (owner's pick, design 05, 2026-11-21 — replaces design 12 chosen earlier the same day): soft and rounded — lavender ground (`paper`), indigo `brand`, dark indigo `ink`, pastel panels (`mint`, `sun` peach, `sky`) with large radii, Nunito throughout, white pill header (`darkHeader: false`; its geometry is the unlayered block at the end of `index.css`). The home hero copy (badge, headline, subtitle) is the wording of that design and was approved by the owner. `gold` (the mirrored booking page's accent) points at the lighter-indigo `booking` palette, not at `brand`, because that page has both white and near-black sections.
- Logo: `src/components/Logo.jsx` (mark matches `public/favicon.svg`).

## Brand and content rules

- Name: **Airport Shuttle Service**. The footer line reads "Operated by Gap Digital" (owner's
  wording, 2026-11-21 — do not change it back). The operator named on every page (About, Contact, Terms,
  Privacy, meta descriptions, structured data) is **Gap Digital** (owner, 2026-11-21).
  Confirmation emails and Stripe receipts still come from Book A Ride NZ, and the
  Google reviews shown are Book A Ride NZ's — the About and Contact pages say so
  in one sentence each; keep that sentence accurate until the platform changes.
- Phone: 022 355 2808. Email: info@bookaride.co.nz.
- Keyword focus: "airport shuttle service", "shuttle to Auckland airport", "shuttle from Auckland airport". Copy must stay distinct from the sibling
  storefronts and from bookaride.co.nz — do not paste their page copy here
  (duplicate content hurts every site). Only `locales/shared/*` (About,
  Contact, footer, interface labels) is common.
- No invented testimonials, customer counts or ratings. Social proof comes
  only from the live `GoogleReviews` component.
- Do not state prices. Pricing is live on the booking page. The $15 night
  surcharge (pickups 11pm–5:59am), free child seats, free waiting time
  (30 min domestic / 60 min international) and free cancellation more than
  24 hours ahead are platform rules and may be stated; re-check
  `api/_lib/pricing.js` in the platform repo before changing those lines.
- Area drive times in `AREAS` are off-peak guides; keep the "off-peak" wording.
- Images: only self-hosted files in `frontend/public/images/`.

## Tracking

Google Tag Manager container `GTM-MZCZLRNS` is installed in
`frontend/index.html` (head script + body noscript), added at the owner's
request on 2026-11-27. GA4 and any ad tags are configured inside GTM, not in
this repo. It loads on every page, including the mirrored booking pages. The
platform repo's "no third-party tracker" rule covers the platform, and the
owner chose not to change it; do not add GTM there without their say-so.

## Languages (i18n)

Six languages: en, zh, ja, ko, es, fr. All customer-facing text lives in
`frontend/src/locales/<lang>.js`; components call `t('section.key')`.

- `locales/en.js` is the source of truth. The other five must mirror it
  exactly: same keys, same list lengths, same `{{placeholders}}`.
  `npm run check:locales` enforces this before every build.
- `locales/shared/<lang>.js` holds interface copy common to the sibling
  storefronts, with `{{brand}}` filled from `siteConfig.siteName`.
- Icons and links are paired with translated list items **by position**.
- Suburb names, street and wharf names, "Airport Shuttle Service" and "Book A Ride NZ"
  stay in English in every language.
- Not translated, by design: the booking and payment-success pages (mirrored
  from the platform) and the Terms and Privacy pages (English, with a
  translated notice).
- The prerendered HTML snapshots and sitemap are English; `?lang=xx`
  variants render in the browser.

## Deploy

Vercel project for this repo — domains airportshuttleservice.co.nz (redirects to www) and
www.airportshuttleservice.co.nz (canonical host: **www**). No environment variables.
**Production deploys from `main`.**

Shipping: branch → `cd frontend && npm run build` must pass → push → PR →
squash-merge → confirm the deploy went live.
