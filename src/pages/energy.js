import { servicePage, IMAGES } from './service-template.js'

servicePage({
  title: 'Energy<br><em>Systems.</em>',
  eyebrow: 'Service 06',
  hero: IMAGES.power,
  lede: 'Power systems integration, maintenance and right-sized dimensioning for critical infrastructure.',
  intro: {
    heading: 'Power done<br><em>right.</em>',
    lead: 'We deliver energy systems — from power distribution to backup systems — that create resilient power foundations for critical sites.',
    paragraphs: [
      'Our engineers handle power system design, integration, commissioning and maintenance, always sized to the real needs of the site.',
      'We combine proper planning with quality components and careful installation for energy systems that last.',
    ],
  },
  capabilities: [
    ['01', 'Power distribution', 'Design and installation of site power distribution systems.'],
    ['02', 'Backup systems', 'UPS and battery backup systems for critical power continuity.'],
    ['03', 'Generators', 'Generator installation, integration and maintenance.'],
    ['04', 'Earthing', 'Earthing and lightning protection systems for site safety.'],
    ['05', 'Dimensioning', 'Right-sized power system dimensioning based on load analysis.'],
    ['06', 'Maintenance', 'Ongoing power system maintenance and support.'],
  ],
  image: IMAGES.solar,
  next: { href: 'network-access.html', label: 'Network Access' },
})
