import '../style.css'

export const IMAGES = {
  // Real JBL Engineering photography, sourced from the company profile PDF
  tower: 'images/tower-night.jpg',
  towerSteel: 'images/project-bts-pole.jpg',
  technician: 'images/technician-tablet.jpg',
  construction: 'images/field-team.jpg',
  site: 'images/hero-site.jpg',
  solar: 'images/solar-panels.jpg',
  team: 'images/jbl-orca-scaffold.jpg',
  survey: 'images/project-bts-site.jpg',
  power: 'images/panel-technician.jpg',
  control: 'images/project-fibre-wiring.jpg',
  cctv: 'images/cctv-camera.jpg',
  elevator: 'images/elevator.jpg',
  warehouse: 'images/jbl-orca-panel.jpg',
  meeting: 'images/network-router.jpg',
  night: 'images/tower-night.jpg',
  // Additional real project photos, available for direct use
  jblHitech: 'images/jbl-hitech-formwork.jpg',
  jblOrcaScaffold: 'images/jbl-orca-scaffold.jpg',
  jblOrcaPanel: 'images/jbl-orca-panel.jpg',
  projectBtsPole: 'images/project-bts-pole.jpg',
  projectFibreWiring: 'images/project-fibre-wiring.jpg',
  projectBtsSite: 'images/project-bts-site.jpg',
}

export const NAV = [
  { href: 'index.html', label: 'Home' },
  { href: 'about.html', label: 'About', dropdown: [
    { href: 'about.html', label: 'About Us' },
    { href: 'mission.html', label: 'Mission' },
    { href: 'values.html', label: 'Values' },
    { href: 'leadership.html', label: 'Leadership' },
    { href: 'history.html', label: 'History' },
    { href: 'certifications.html', label: 'Certifications' },
  ]},
  { href: 'services.html', label: 'Services', dropdown: [
    { href: 'services.html', label: 'All Services' },
    { href: 'alt-power.html', label: 'Alternative Power' },
    { href: 'telecoms.html', label: 'Telecommunications' },
    { href: 'fibre.html', label: 'Fibre Hub Systems' },
    { href: 'bts.html', label: 'BTS Operations' },
    { href: 'transmission.html', label: 'Transmission Links' },
    { href: 'energy.html', label: 'Energy Systems' },
    { href: 'network-access.html', label: 'Network Access' },
    { href: 'security.html', label: 'Security Systems' },
    { href: 'vertical-transport.html', label: 'Vertical Transport' },
    { href: 'products.html', label: 'Products & Supply' },
  ]},
  { href: 'projects.html', label: 'Work', dropdown: [
    { href: 'projects.html', label: 'All Projects' },
    { href: 'project-1.html', label: 'Base Station Power' },
    { href: 'project-2.html', label: 'Fibre Hub Setup' },
    { href: 'project-3.html', label: 'BTS Installation' },
    { href: 'process.html', label: 'Our Process' },
    { href: 'safety.html', label: 'Safety' },
  ]},
  { href: 'careers.html', label: 'Careers' },
  { href: 'contact.html', label: 'Contact' },
]

export function renderShell(pageId, contentHtml) {
  const current = (typeof window !== 'undefined' ? window.location.pathname.split('/').pop() : '') || 'index.html'

  const navHtml = NAV.map(item => {
    if (item.dropdown) {
      const dropdownHtml = item.dropdown.map(sub => {
        const active = current === sub.href ? 'active' : ''
        return `<a class="dropdown-link ${active}" href="${sub.href}">${sub.label}</a>`
      }).join('')
      const parentActive = item.dropdown.some(sub => sub.href === current) ? 'active' : ''
      return `
        <div class="nav-item has-dropdown ${parentActive}">
          <a href="${item.href}" class="nav-link">${item.label}</a>
          <span class="dropdown-arrow" aria-hidden="true">▾</span>
          <div class="dropdown">${dropdownHtml}</div>
        </div>`
    }
    const active = current === item.href ? 'active' : ''
    return `<div class="nav-item"><a class="nav-link ${active}" href="${item.href}">${item.label}</a></div>`
  }).join('')

  const navbar = `
    <header class="navbar" id="navbar">
      <a class="brand" href="index.html" aria-label="JBL Engineering home">
        <img class="brand-logo" src="/images/logo.png" alt="JBL Engineering logo" />
      </a>
      <nav class="nav-menu" aria-label="Main navigation">${navHtml}</nav>
      <a class="nav-cta" href="contact.html">Get in touch <span>↗</span></a>
      <button class="hamburger" aria-label="Open menu"><span></span><span></span><span></span></button>
    </header>
    <div class="mobile-menu" id="mobileMenu"></div>`

  const footer = `
    <footer class="site-footer">
      <div class="footer-grid">
        <div class="footer-brand">
          <a class="brand" href="index.html"><img class="brand-logo" src="/images/logo.png" alt="JBL Engineering logo" /></a>
          <p class="footer-tag">Electrical · Telecoms · Infrastructure</p>
        </div>
        <div class="footer-col">
          <p class="footer-col-title">Company</p>
          <a href="about.html">About Us</a>
          <a href="mission.html">Mission</a>
          <a href="values.html">Values</a>
          <a href="leadership.html">Leadership</a>
          <a href="history.html">History</a>
          <a href="certifications.html">Certifications</a>
        </div>
        <div class="footer-col">
          <p class="footer-col-title">Services</p>
          <a href="services.html">All Services</a>
          <a href="alt-power.html">Alternative Power</a>
          <a href="telecoms.html">Telecommunications</a>
          <a href="fibre.html">Fibre Hub Systems</a>
          <a href="bts.html">BTS Operations</a>
          <a href="transmission.html">Transmission Links</a>
          <a href="energy.html">Energy Systems</a>
          <a href="network-access.html">Network Access</a>
          <a href="security.html">Security Systems</a>
          <a href="vertical-transport.html">Vertical Transport</a>
          <a href="products.html">Products & Supply</a>
        </div>
        <div class="footer-col">
          <p class="footer-col-title">Work</p>
          <a href="projects.html">All Projects</a>
          <a href="project-1.html">Base Station Power</a>
          <a href="project-2.html">Fibre Hub Setup</a>
          <a href="project-3.html">BTS Installation</a>
          <a href="process.html">Our Process</a>
          <a href="safety.html">Safety</a>
          <a href="careers.html">Careers</a>
        </div>
        <div class="footer-contact">
          <p class="footer-col-title">Contact</p>
          <a href="mailto:jblengineering1@gmail.com">jblengineering1@gmail.com</a>
          <a href="tel:07044440562">0704 444 0562</a>
          <a href="https://wa.me/2347044440562" target="_blank" rel="noopener">WhatsApp ↗</a>
          <a href="contact.html">Send an enquiry →</a>
          <span>5, Road 2, Oluode Estate,<br>Oluyole Extension, Ibadan</span>
          <span>38, Opeifa Street,<br>Anthony Village, Lagos</span>
        </div>
      </div>
      <p class="footer-bottom">© 2024 JBL Engineering. Built for progress.</p>
    </footer>`

  return `<div class="site-shell">${navbar}<main class="page-content">${contentHtml}</main>${footer}<a class="whatsapp-float" href="https://wa.me/2347044440562" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a><button class="ai-chatbot-toggle" id="aiChatToggle" aria-label="Open AI assistant">AI</button><div class="ai-chatbot-panel" id="aiChatPanel"><div class="ai-chatbot-header"><span>JBL Assistant</span><button id="aiChatClose" aria-label="Close chat">×</button></div><div class="ai-chatbot-messages" id="aiChatMessages"><div class="ai-chatbot-message bot">Hello! I am the JBL Assistant. Choose a question below or type your own.</div></div><div class="ai-chatbot-questions" id="aiChatQuestions"></div></div></div>`
}

export function initShell() {
  const navbar = document.querySelector('.navbar')
  const hamburger = document.querySelector('.hamburger')
  const mobileMenu = document.querySelector('.mobile-menu')

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40)
  }, { passive: true })

  // Desktop dropdown: open on hover, keep open when moving into dropdown
  document.querySelectorAll('.has-dropdown').forEach((item) => {
    let timer
    item.addEventListener('mouseenter', () => {
      clearTimeout(timer)
      item.classList.add('open')
    })
    item.addEventListener('mouseleave', () => {
      timer = setTimeout(() => item.classList.remove('open'), 120)
    })
    // Click on small screens / touch
    item.querySelector('.dropdown-arrow')?.addEventListener('click', (e) => {
      e.preventDefault()
      item.classList.toggle('open')
    })
  })

  // Mobile menu
  const buildMobileMenu = () => NAV.map(item => {
    if (item.dropdown) {
      const subs = item.dropdown.map(sub => `<a href="${sub.href}">${sub.label}</a>`).join('')
      return `<div class="mobile-nav-group"><button class="mobile-nav-toggle">${item.label} <span>+</span></button><div class="mobile-nav-subs">${subs}</div></div>`
    }
    return `<a class="mobile-nav-link" href="${item.href}">${item.label}</a>`
  }).join('')

  hamburger?.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open')
    hamburger.classList.toggle('open', isOpen)
    if (isOpen && !mobileMenu.innerHTML) {
      mobileMenu.innerHTML = buildMobileMenu()
      mobileMenu.querySelectorAll('.mobile-nav-toggle').forEach((btn) => {
        btn.addEventListener('click', () => {
          const subs = btn.nextElementSibling
          const open = subs.classList.toggle('open')
          btn.querySelector('span').textContent = open ? '−' : '+'
        })
      })
    }
    document.body.style.overflow = isOpen ? 'hidden' : ''
  })

  // Close mobile menu on navigation
  mobileMenu?.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      mobileMenu.classList.remove('open')
      hamburger.classList.remove('open')
      document.body.style.overflow = ''
    }
  })

  // Reveal animations
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible')
  }), { threshold: 0.12 })
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

  // Counters
  const counters = document.querySelectorAll('[data-count]')
  if (counters.length) {
    const countObserver = new IntersectionObserver((entries, obs) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      const el = entry.target
      const target = Number(el.dataset.count)
      let current = 0
      const step = Math.max(1, Math.ceil(target / 35))
      const timer = setInterval(() => {
        current = Math.min(target, current + step)
        el.textContent = current
        if (current === target) clearInterval(timer)
      }, 35)
      obs.unobserve(el)
    }), { threshold: 0.8 })
    counters.forEach((el) => countObserver.observe(el))
  }

  // Contact form
  const form = document.querySelector('.contact-form')
  form?.addEventListener('submit', (e) => {
    e.preventDefault()
    const msg = form.querySelector('.form-message')
    if (msg) msg.textContent = 'Thanks — your enquiry is ready for the JBL team.'
    form.reset()
  })

  // Project filters
  const filters = document.querySelectorAll('.filter')
  filters.forEach((btn) => btn.addEventListener('click', () => {
    filters.forEach((b) => b.classList.remove('active'))
    btn.classList.add('active')
    const filter = btn.dataset.filter
    document.querySelectorAll('.project-card').forEach((card) => {
      card.style.display = filter === 'all' || card.dataset.category === filter ? 'grid' : 'none'
    })
  }))

  // AI Chatbot
  const chatToggle = document.getElementById('aiChatToggle')
  const chatPanel = document.getElementById('aiChatPanel')
  const chatClose = document.getElementById('aiChatClose')
  const chatMessages = document.getElementById('aiChatMessages')
  const chatQuestions = document.getElementById('aiChatQuestions')

  const qa = {
    'What services does JBL offer?': 'JBL offers alternative power, telecommunications, fibre hub systems, BTS operations, transmission links, energy systems, network access, security systems, vertical transport, and products & supply.',
    'Where is JBL located?': 'JBL is located at 5, Road 2, Oluode Estate, Oluyole Extension, Ibadan, and 38, Opeifa Street, Anthony Village, Lagos.',
    'How can I contact JBL?': 'You can contact JBL via email at jblengineering1@gmail.com, phone at 0704 444 0562, or WhatsApp through the chat button on this site.',
    'When was JBL established?': 'JBL Engineering was established in April 2007.',
    'Does JBL do telecom infrastructure?': 'Yes, JBL specialises in telecommunications infrastructure installation, including FTTH, fibre deployment, and BTS operations.',
    'Can JBL handle power systems?': 'Yes, JBL provides power systems integration, maintenance, backup solutions, and right-sized dimensioning for telecom and infrastructure sites.',
  }

  const questions = Object.keys(qa)

  const renderQuestions = () => {
    chatQuestions.innerHTML = questions.map(q => `<button>${q}</button>`).join('')
    chatQuestions.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        const q = btn.textContent
        chatMessages.innerHTML += `<div class="ai-chatbot-message user">${q}</div>`
        chatMessages.innerHTML += `<div class="ai-chatbot-message bot">${qa[q]}</div>`
        chatMessages.scrollTop = chatMessages.scrollHeight
      })
    })
  }

  chatToggle?.addEventListener('click', () => {
    chatPanel?.classList.toggle('open')
    if (chatPanel.classList.contains('open') && !chatQuestions.innerHTML) renderQuestions()
  })

  chatClose?.addEventListener('click', () => chatPanel?.classList.remove('open'))
}
