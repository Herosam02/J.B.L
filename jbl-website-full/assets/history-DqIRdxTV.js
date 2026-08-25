import{I as e,r as n,i as t}from"./layout-BnW1ESXn.js";const r=[["2007","JBL is founded","JBL Engineering is established in April 2007, focusing on telecommunications infrastructure installation."],["Early years","Building trust","We deliver our first telecom site electrical installations and begin building long-term client partnerships."],["Growth","Expanding capabilities","Our services expand to include power systems, fibre infrastructure, and ongoing maintenance support."],["Today","A dependable partner","JBL continues to deliver electrical, telecoms and infrastructure solutions with a focus on safety and excellence."]],o=`
  <section class="page-hero">
    <div class="page-hero-image" style="background-image:url('${e.towerSteel}')"></div>
    <div class="page-hero-overlay"></div>
    <div class="page-hero-content">
      <p class="eyebrow light"><span></span> Company</p>
      <h1>Our<br><em>History.</em></h1>
      <p class="lede">From a 2007 founding to a dependable engineering partner — built one project at a time.</p>
    </div>
  </section>

  <section class="page-section">
    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span>History</div>
    <div class="reveal" style="margin-bottom:60px">
      <p class="eyebrow"><span></span> Our journey</p>
      <h2>Built one<br><em>project at a time.</em></h2>
    </div>
    <div class="timeline">
      ${r.map(([i,a,s])=>`<div class="timeline-item reveal"><span class="year">${i}</span><h3>${a}</h3><p>${s}</p></div>`).join("")}
    </div>
  </section>

  <section class="page-section alt">
    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span>History</div>
    <div class="grid-2" style="align-items:center">
      <div class="reveal">
        <p class="eyebrow"><span></span> Looking forward</p>
        <h2>The next<br><em>connection.</em></h2>
        <p class="body" style="margin-top:24px">Our history shapes how we work today: with care, with discipline, and with a focus on the long term. We are always looking forward to the next project, the next partnership, and the next connection we can help build.</p>
        <a class="text-link" href="projects.html" style="margin-top:30px">See our work <span>→</span></a>
      </div>
      <div class="image-block reveal" style="background-image:url('${e.construction}')"></div>
    </div>
  </section>
`;document.querySelector("#app").innerHTML=n("History",o);t();
