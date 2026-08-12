import { servicePage, IMAGES } from './service-template.js'

servicePage({
  title: 'Network<br><em>Access.</em>',
  eyebrow: 'Service 07',
  hero: IMAGES.site,
  lede: 'Routine access maintenance that keeps networks safe, available and performing.',
  intro: {
    heading: 'Access that<br><em>works.</em>',
    lead: 'We provide routine network access maintenance — the practical, ongoing work that keeps network sites safe, accessible and available.',
    paragraphs: [
      'From site access checks to routine maintenance visits, we make sure the infrastructure people depend on stays in good condition.',
      'It is unglamorous, essential work — and we do it with the same care as every other service.',
    ],
  },
  capabilities: [
    ['01', 'Site access checks', 'Regular site access verification and safety checks.'],
    ['02', 'Routine maintenance', 'Scheduled maintenance visits to keep sites healthy.'],
    ['03', 'Condition reporting', 'Site condition reporting and issue flagging.'],
    ['04', 'Access repairs', 'Access route repairs and maintenance as needed.'],
    ['05', 'Safety compliance', 'Ongoing safety compliance checks at active sites.'],
    ['06', 'Documentation', 'Maintenance documentation and site records.'],
  ],
  image: IMAGES.technician,
  next: { href: 'security.html', label: 'Security Systems' },
})
