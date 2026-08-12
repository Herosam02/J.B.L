import { renderShell, initShell, IMAGES } from '../layout.js'

export { IMAGES }

export function servicePage({ title, eyebrow, hero, lede, intro, capabilities, image, next }) {
  const html = `
    <section class="page-hero">
      <div class="page-hero-image" style="background-image:url('${hero}')"></div>
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <p class="eyebrow light"><span></span> ${eyebrow}</p>
        <h1>${title}</h1>
        <p class="lede">${lede}</p>
      </div>
    </section>

    <section class="page-section">
      <div class="breadcrumb"><a href="index.html">Home</a><span>/</span><a href="services.html">Services</a><span>/</span>${title.replace(/<br>/g,' ').replace(/<[^>]+>/g,'').trim()}</div>
      <div class="grid-2">
        <div class="reveal"><p class="eyebrow"><span></span> Overview</p><h2>${intro.heading}</h2></div>
        <div class="reveal" style="padding-top:20px">
          <p class="body" style="font-size:20px;line-height:1.45;letter-spacing:-.03em;color:var(--ink);max-width:500px">${intro.lead}</p>
          ${intro.paragraphs.map(p => `<p class="body" style="margin-top:22px">${p}</p>`).join('')}
        </div>
      </div>
    </section>

    <section class="page-section alt">
      <div class="breadcrumb"><a href="index.html">Home</a><span>/</span><a href="services.html">Services</a><span>/</span>${title.replace(/<br>/g,' ').replace(/<[^>]+>/g,'').trim()}</div>
      <div class="reveal" style="margin-bottom:50px">
        <p class="eyebrow"><span></span> What we deliver</p>
        <h2>Capability <em>breakdown.</em></h2>
      </div>
      <div class="grid-3">
        ${capabilities.map(([num, title, desc]) => `<div class="card reveal"><span class="num">${num}</span><h3>${title}</h3><p>${desc}</p></div>`).join('')}
      </div>
    </section>

    <section class="page-section">
      <div class="breadcrumb"><a href="index.html">Home</a><span>/</span><a href="services.html">Services</a><span>/</span>${title.replace(/<br>/g,' ').replace(/<[^>]+>/g,'').trim()}</div>
      <div class="grid-2" style="align-items:center">
        <div class="image-block reveal" style="background-image:url('${image}')"></div>
        <div class="reveal">
          <p class="eyebrow"><span></span> Next step</p>
          <h2>Let's talk<br>about your <em>project.</em></h2>
          <p class="body" style="margin-top:24px">Have a site that needs this capability? Our team is ready to understand your requirements and plan a safe, dependable delivery.</p>
          <a class="button button-primary" href="contact.html" style="margin-top:30px">Start a conversation <span>↗</span></a>
          ${next ? `<a class="text-link" href="${next.href}" style="margin-top:30px;margin-left:30px">Next: ${next.label} <span>→</span></a>` : ''}
        </div>
      </div>
    </section>
  `
  document.querySelector('#app').innerHTML = renderShell(eyebrow, html)
  initShell()
}
