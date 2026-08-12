import { renderShell, initShell, IMAGES } from '../layout.js'

const certs = [
  ['S', 'Safety compliance', 'Adherence to industry safety standards across all field operations.'],
  ['E', 'Electrical standards', 'Electrical installation work performed to recognised engineering standards.'],
  ['T', 'Telecoms expertise', 'Telecommunications infrastructure delivered with technical accuracy and care.'],
  ['Q', 'Quality assurance', 'A commitment to quality visible in every installation and maintenance visit.'],
]

const html = `
  <section class="page-hero">
    <div class="page-hero-image" style="background-image:url('${IMAGES.survey}')"></div>
    <div class="page-hero-overlay"></div>
    <div class="page-hero-content">
      <p class="eyebrow light"><span></span> Company</p>
      <h1>Certifications<br><em>& Standards.</em></h1>
      <p class="lede">We hold our work to recognised standards — because infrastructure people rely on demands nothing less.</p>
    </div>
  </section>

  <section class="page-section">
    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span>Certifications</div>
    <div class="reveal" style="margin-bottom:60px">
      <p class="eyebrow"><span></span> Standards we uphold</p>
      <h2>Work you<br><em>can trust.</em></h2>
    </div>
    <div class="cert-grid">
      ${certs.map(([letter, title, desc]) => `<div class="cert-card reveal"><div class="badge">${letter}</div><div><h3>${title}</h3><p>${desc}</p></div></div>`).join('')}
    </div>
  </section>

  <section class="page-section alt">
    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span>Certifications</div>
    <div class="grid-2" style="align-items:center">
      <div class="image-block reveal" style="background-image:url('${IMAGES.power}')"></div>
      <div class="reveal">
        <p class="eyebrow"><span></span> Our commitment</p>
        <h2>Standards<br>are <em>habits.</em></h2>
        <p class="body" style="margin-top:24px">We do not treat standards as paperwork. They are the habits we bring to every site: safe working, correct installation, careful documentation, and accountable delivery.</p>
        <a class="text-link" href="safety.html" style="margin-top:30px">Read about safety <span>→</span></a>
      </div>
    </div>
  </section>
`

document.querySelector('#app').innerHTML = renderShell('Certifications', html)
initShell()
