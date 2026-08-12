import { servicePage, IMAGES } from './service-template.js'

servicePage({
  title: 'Vertical<br><em>Transport.</em>',
  eyebrow: 'Service 09',
  hero: IMAGES.elevator,
  lede: 'Installation and support for dependable elevator and vertical transport systems.',
  intro: {
    heading: 'Moving<br><em>reliably.</em>',
    lead: 'We provide installation and support for vertical transport systems — elevators and lifts — that people rely on every day.',
    paragraphs: [
      'Our teams handle installation, integration and ongoing support for elevator systems in commercial and industrial settings.',
      'We bring the same engineering discipline to vertical transport that we bring to every other service: safety first, quality always.',
    ],
  },
  capabilities: [
    ['01', 'Elevator installation', 'Elevator system installation and commissioning.'],
    ['02', 'System integration', 'Integration with building power and control systems.'],
    ['03', 'Maintenance', 'Scheduled maintenance for safe, reliable operation.'],
    ['04', 'Repairs', 'Repair and troubleshooting services.'],
    ['05', 'Safety checks', 'Regular safety inspections and compliance.'],
    ['06', 'Modernisation', 'System upgrades and modernisation programmes.'],
  ],
  image: IMAGES.construction,
  next: { href: 'products.html', label: 'Products & Supply' },
})
