import { renderShell, initShell, IMAGES } from '../layout.js'

const steps = [
  ['01', 'Understand', 'We listen, survey the site and understand the outcome that matters.'],
  ['02', 'Plan', 'We translate requirements into a clear, safe and efficient delivery plan.'],
  ['03', 'Deliver', 'Our field teams install, integrate and commission with discipline.'],
  ['04', 'Support', 'We stay close after handover with practical ongoing maintenance.'],
]

const html = `
  <section class="page-hero">
    <div class="page-hero-image" style="background-image:url('${IMAGES.survey}')"></div>
    <div class="page-hero-overlay"></div>
    <div class="page-hero-content">
      <p class="eyebrow light"><span></span> Work</p>
      <h1>From brief<br>to <em>built.</em></h1>
      <p class="lede">A clear, disciplined approach that takes projects from first conversation to long-term support.</p>
    </div>
  </section>

  <section class="page-section">
    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span>Process</div>
    <div class="reveal" style="margin-bottom:60px">
      <p class="eyebrow"><span></span> Our approach</p>
      <h2>Four steps,<br>one <em>standard.</em></h2>
    </div>
    <div class="process-steps">
      ${steps.map(([num, title, desc]) => `<div class="process-step reveal"><span>${num}</span><h3>${title}</h3><p>${desc}</p></div>`).join('')}
    </div>
  </section>

  <section class="page-section alt">
    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span>Process</div>
    <div class="grid-2" style="align-items:center">
      <div class="image-block reveal" style="background-image:url('${IMAGES.meeting}')"></div>
      <div class="reveal">
        <p class="eyebrow"><span></span> Why it matters</p>
        <h2>Discipline<br>that <em>shows.</em></h2>
        <p class="body" style="margin-top:24px">Our process is not about paperwork. It is about making sure every project is understood, planned, delivered and supported to the same standard.</p>
        <p class="body">It is how we build long-term partnerships — one well-executed project at a time.</p>
        <a class="button button-primary" href="contact.html" style="margin-top:30px">Start a project <span>↗</span></a>
      </div>
    </div>
  </section>
`

document.querySelector('#app').innerHTML = renderShell('Process', html)
initShell()
