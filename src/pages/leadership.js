import { renderShell, initShell, IMAGES } from '../layout.js'

const team = [
  ['J', 'Managing Director', 'Leads JBL with a focus on long-term partnerships, safety culture and engineering excellence.'],
  ['A', 'Technical Director', 'Oversees telecoms and electrical delivery, ensuring every site meets technical and safety standards.'],
  ['O', 'Operations Lead', 'Coordinates field teams, logistics and project delivery across active sites.'],
]

const html = `
  <section class="page-hero">
    <div class="page-hero-image" style="background-image:url('${IMAGES.meeting}')"></div>
    <div class="page-hero-overlay"></div>
    <div class="page-hero-content">
      <p class="eyebrow light"><span></span> Company</p>
      <h1>Our<br><em>Leadership.</em></h1>
      <p class="lede">The people who set the standard and keep JBL focused on dependable, safe delivery.</p>
    </div>
  </section>

  <section class="page-section">
    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span>Leadership</div>
    <div class="reveal" style="margin-bottom:60px">
      <p class="eyebrow"><span></span> The team behind JBL</p>
      <h2>Guided by<br><em>experience.</em></h2>
    </div>
    <div class="team-grid">
      ${team.map(([initial, role, bio]) => `<div class="team-card reveal"><div class="avatar">${initial}</div><h3>Leader</h3><p class="role">${role}</p><p>${bio}</p></div>`).join('')}
    </div>
  </section>

  <section class="page-section alt">
    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span>Leadership</div>
    <div class="grid-2" style="align-items:center">
      <div class="image-block reveal" style="background-image:url('${IMAGES.team}')"></div>
      <div class="reveal">
        <p class="eyebrow"><span></span> Our approach to leadership</p>
        <h2>Accountable,<br><em>hands-on.</em></h2>
        <p class="body" style="margin-top:24px">Our leadership stays close to the work. Decisions are made by people who understand the field, the standards, and the responsibility that comes with building infrastructure people rely on.</p>
        <a class="text-link" href="history.html" style="margin-top:30px">Read our history <span>→</span></a>
      </div>
    </div>
  </section>
`

document.querySelector('#app').innerHTML = renderShell('Leadership', html)
initShell()
