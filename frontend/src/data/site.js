// Site structure for airportshuttleservice.co.nz: which marketing pages exist,
// what each one is made of, what the navigation shows, and the areas with
// their own landing page. The words themselves live in src/locales/<lang>.js.
//
// To add a page: add it to PAGES, add `pages.<id>` and `meta.<id>` to all six
// locale files, and add its `nav.<key>` label if it belongs in the menu.
// To add an area: add it to AREAS and add `areas.<slug>.name` to all six
// locale files — the page copy is templated from `area.*`.
// Icons are lucide-react names, paired with list items by position.
export const PAGES = [
  {
    id: 'departures',
    path: '/to-auckland-airport',
    icon: 'PlaneTakeoff',
    blocks: [
      { type: 'steps', key: 'timeline' },
      { type: 'areas', key: 'areas' },
      { type: 'faq', key: 'faqs' },
    ],
  },
  {
    id: 'arrivals',
    path: '/from-auckland-airport',
    icon: 'PlaneLanding',
    blocks: [
      { type: 'features', key: 'how', icons: ['Radar', 'UserCheck', 'Home'] },
      { type: 'checks', key: 'terminals', icons: ['Globe', 'MapPinned'] },
      { type: 'faq', key: 'faqs' },
    ],
  },
]

export const NAV = [
  { key: 'home', path: '/' },
  { key: 'departures', path: '/to-auckland-airport' },
  { key: 'arrivals', path: '/from-auckland-airport' },
  { key: 'about', path: '/about' },
  { key: 'contact', path: '/contact' },
]

// driveTime is the typical off-peak range in minutes to Auckland Airport, a
// guide only. Suburb names stay in English in every language because they are
// what people type into the booking page's address box.
export const AREAS = {
  'auckland-cbd': { driveTime: '25–35', suburbs: ['Auckland Central', 'Viaduct Harbour', 'Britomart', 'Wynyard Quarter', 'Parnell', 'Newmarket', 'Ponsonby', 'Grey Lynn', 'Mt Eden', 'Epsom'] },
  'north-shore': { driveTime: '35–50', suburbs: ['Takapuna', 'Milford', 'Devonport', 'Albany', 'Browns Bay', 'Mairangi Bay', 'Glenfield', 'Birkenhead', 'Northcote', 'Torbay'] },
  'west-auckland': { driveTime: '30–40', suburbs: ['Henderson', 'New Lynn', 'Te Atatu', 'Massey', 'Titirangi', 'Glen Eden', 'Avondale', 'Hobsonville', 'West Harbour', 'Kumeu'] },
  'south-auckland': { driveTime: '10–25', suburbs: ['Manukau', 'Papatoetoe', 'Mangere', 'Manurewa', 'Papakura', 'Takanini', 'Flat Bush', 'Karaka', 'Drury', 'Pukekohe'] },
  'east-auckland': { driveTime: '25–40', suburbs: ['Howick', 'Botany', 'Pakuranga', 'Half Moon Bay', 'Bucklands Beach', 'East Tamaki', 'Beachlands', 'St Heliers', 'Mission Bay', 'Glen Innes'] },
}

export const REDIRECTS = {
  '/departures': '/to-auckland-airport',
  '/arrivals': '/from-auckland-airport',
}
