import { servicePage, IMAGES } from './service-template.js'

servicePage({
  title: 'Security<br><em>Systems.</em>',
  eyebrow: 'Service 08',
  hero: IMAGES.cctv,
  lede: 'CCTV installation and integrated site security solutions that protect infrastructure and people.',
  intro: {
    heading: 'Sites that<br><em>stay secure.</em>',
    lead: 'We install and integrate security systems — from CCTV to access control — that protect telecom sites, hubs and critical infrastructure.',
    paragraphs: [
      'Our security solutions are designed for the environments we work in: remote sites, active networks and critical infrastructure.',
      'We combine quality equipment with proper installation for security systems that perform when they are needed most.',
    ],
  },
  capabilities: [
    ['01', 'CCTV installation', 'Camera system design, installation and configuration.'],
    ['02', 'Access control', 'Electronic access control systems for site security.'],
    ['03', 'Monitoring', 'Remote monitoring setup and integration.'],
    ['04', 'Recording', 'DVR/NVR installation and storage configuration.'],
    ['05', 'Integration', 'Security system integration with site infrastructure.'],
    ['06', 'Maintenance', 'Ongoing security system maintenance and support.'],
  ],
  image: IMAGES.control,
  next: { href: 'vertical-transport.html', label: 'Vertical Transport' },
})
