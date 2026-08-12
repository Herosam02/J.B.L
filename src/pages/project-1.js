import { renderShell, initShell, IMAGES } from '../layout.js'

const html = `
  <section class="page-hero">
    <div class="page-hero-image" style="background-image:url('${IMAGES.projectBtsPole}')"></div>
    <div class="page-hero-overlay"></div>
    <div class="page-hero-content">
      <p class="eyebrow light"><span></span> Project 01</p>
      <h1>Base Station<br><em>Power Upgrade.</em></h1>
      <p class="lede">Upgraded electrical and backup power systems across multiple telecom base stations.</p>
    </div>
  </section>

  <section class="page-section">
    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span><a href="projects.html">Projects</a><span>/</span>Base Station Power</div>
    <div class="grid-2">
      <div class="reveal"><p class="eyebrow"><span></span> Overview</p><h2>Reliable power<br>for <em>live sites.</em></h2></div>
      <div class="reveal" style="padding-top:20px">
        <p class="body" style="font-size:20px;line-height:1.45;letter-spacing:-.03em;color:var(--ink);max-width:500px">We upgraded electrical and backup power systems across multiple telecom base stations, including panel installations, grounding, and commissioning.</p>
        <p class="body" style="margin-top:22px">The project ensured each site had reliable power distribution, proper earthing and backup capacity to maintain network availability.</p>
      </div>
    </div>
  </section>

  <section class="page-section alt">
    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span><a href="projects.html">Projects</a><span>/</span>Base Station Power</div>
    <div class="reveal" style="margin-bottom:50px"><p class="eyebrow"><span></span> Scope of work</p><h2>What we <em>delivered.</em></h2></div>
    <div class="grid-3">
      <div class="card reveal"><span class="num">01</span><h3>Panel installations</h3><p>New and upgraded electrical panel installations across base station sites.</p></div>
      <div class="card reveal"><span class="num">02</span><h3>Grounding systems</h3><p>Earthing and grounding system installation for site electrical safety.</p></div>
      <div class="card reveal"><span class="num">03</span><h3>Backup power</h3><p>Battery bank and backup power system integration for site continuity.</p></div>
      <div class="card reveal"><span class="num">04</span><h3>Commissioning</h3><p>Full system commissioning and testing to verify safe, reliable operation.</p></div>
      <div class="card reveal"><span class="num">05</span><h3>Power distribution</h3><p>Upgraded power distribution to handle site load requirements.</p></div>
      <div class="card reveal"><span class="num">06</span><h3>Documentation</h3><p>As-built documentation and handover records for each site.</p></div>
    </div>
  </section>

  <section class="page-section">
    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span><a href="projects.html">Projects</a><span>/</span>Base Station Power</div>
    <div class="grid-2" style="align-items:center">
      <div class="image-block reveal" style="background-image:url('${IMAGES.power}')"></div>
      <div class="reveal">
        <p class="eyebrow"><span></span> Outcome</p>
        <h2>Sites that<br>stay <em>online.</em></h2>
        <p class="body" style="margin-top:24px">The project improved network uptime and reduced power-related faults across every site — all while maintaining zero safety incidents throughout delivery.</p>
        <a class="text-link" href="project-2.html" style="margin-top:30px">Next project: Fibre Hub Setup <span>→</span></a>
      </div>
    </div>
  </section>
`

document.querySelector('#app').innerHTML = renderShell('Project 01', html)
initShell()
