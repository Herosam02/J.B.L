import { servicePage, IMAGES } from './service-template.js'

servicePage({
  title: 'Products<br><em>& Supply.</em>',
  eyebrow: 'Service 10',
  hero: IMAGES.warehouse,
  lede: 'Electrical and mechanical products, materials and equipment integration for infrastructure projects.',
  intro: {
    heading: 'The right<br><em>materials.</em>',
    lead: 'We supply electrical and mechanical products, materials and equipment — and integrate them into the infrastructure we build.',
    paragraphs: [
      'From cables and panels to power equipment and installation materials, we make sure the right components are specified and supplied.',
      'Our supply capability means we can deliver complete solutions — not just installation, but the materials and equipment that make them work.',
    ],
  },
  capabilities: [
    ['01', 'Electrical products', 'Cables, panels, breakers and electrical materials supply.'],
    ['02', 'Power equipment', 'Generators, UPS systems and power equipment supply.'],
    ['03', 'Mechanical materials', 'Mechanical installation materials and equipment.'],
    ['04', 'Equipment integration', 'Integration of supplied equipment into site infrastructure.'],
    ['05', 'Specification', 'Product specification and selection support.'],
    ['06', 'Logistics', 'Delivery and logistics coordination for project sites.'],
  ],
  image: IMAGES.warehouse,
  next: { href: 'projects.html', label: 'Projects' },
})
