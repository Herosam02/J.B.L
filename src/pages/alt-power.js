import { servicePage, IMAGES } from './service-template.js'

servicePage({
  title: 'Alternative<br><em>Power.</em>',
  eyebrow: 'Service 01',
  hero: IMAGES.solar,
  lede: 'Solar and inverter systems designed to keep critical infrastructure online when the grid cannot.',
  intro: {
    heading: 'Energy that<br><em>stays on.</em>',
    lead: 'We design and install alternative power solutions that keep telecom sites, hubs and critical infrastructure running — even when the grid is unreliable.',
    paragraphs: [
      'From solar arrays to inverter systems and battery banks, we size every solution to the real load profile of the site.',
      'Our approach combines proper dimensioning, quality components and careful installation to deliver power systems that perform for the long term.',
    ],
  },
  capabilities: [
    ['01', 'Solar systems', 'Solar array design, sizing and installation for off-grid and hybrid sites.'],
    ['02', 'Inverter systems', 'Inverter selection, integration and configuration for reliable power conversion.'],
    ['03', 'Battery banks', 'Battery sizing, installation and maintenance for backup energy storage.'],
    ['04', 'Hybrid solutions', 'Combining solar, inverter and generator for resilient hybrid power.'],
    ['05', 'Load analysis', 'Right-sized dimensioning based on actual site power requirements.'],
    ['06', 'Maintenance', 'Ongoing support to keep alternative power systems performing.'],
  ],
  image: IMAGES.power,
  next: { href: 'telecoms.html', label: 'Telecommunications' },
})
