import { servicePage, IMAGES } from './service-template.js'

servicePage({
  title: 'Fibre Hub<br><em>Systems.</em>',
  eyebrow: 'Service 03',
  hero: IMAGES.towerSteel,
  lede: 'FTTP — Fibre to the premises. Fibre survey, design and implementation for high-capacity connectivity.',
  intro: {
    heading: 'High-capacity<br><em>connectivity.</em>',
    lead: 'We provide FTTP (Fibre to the Premises) — fibre survey, design and implementation, plus fibre hub systems — that deliver the high-capacity connectivity modern networks require.',
    paragraphs: [
      'Our work covers structured cabling, power distribution, UPS integration and equipment racks for fibre distribution hubs.',
      'We ensure every hub is built for reliability, with proper power, protection and organisation.',
    ],
  },
  capabilities: [
    ['01', 'Survey & design', 'Fibre route survey and hub design for optimal performance.'],
    ['02', 'Structured cabling', 'Professional structured cabling installation and termination.'],
    ['03', 'Power distribution', 'Reliable power distribution systems for hub infrastructure.'],
    ['04', 'UPS integration', 'Uninterruptible power supply integration for hub continuity.'],
    ['05', 'Equipment racks', 'Rack installation, organisation and cable management.'],
    ['06', 'Testing & commissioning', 'Full testing, certification and commissioning of fibre systems.'],
  ],
  image: IMAGES.control,
  next: { href: 'bts.html', label: 'BTS Operations' },
})
