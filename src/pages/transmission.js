import { servicePage, IMAGES } from './service-template.js'

servicePage({
  title: 'Transmission<br><em>Links.</em>',
  eyebrow: 'Service 05',
  hero: IMAGES.tower,
  lede: 'Installation and maintenance of transmission links across demanding sites and terrain.',
  intro: {
    heading: 'Links that<br><em>hold.</em>',
    lead: 'We install and maintain transmission links that carry data across demanding sites — from microwave to fibre transmission systems.',
    paragraphs: [
      'Our teams handle the full lifecycle: planning, installation, alignment, testing and ongoing maintenance.',
      'We work in challenging environments and bring the field discipline needed to keep links stable and reliable.',
    ],
  },
  capabilities: [
    ['01', 'Link planning', 'Transmission link planning and path analysis.'],
    ['02', 'Installation', 'Antenna and radio installation for transmission links.'],
    ['03', 'Alignment', 'Precision alignment for optimal signal quality.'],
    ['04', 'Testing', 'Link testing, verification and performance optimisation.'],
    ['05', 'Maintenance', 'Ongoing link maintenance and performance monitoring.'],
    ['06', 'Upgrades', 'Capacity upgrades and technology refresh for existing links.'],
  ],
  image: IMAGES.night,
  next: { href: 'energy.html', label: 'Energy Systems' },
})
