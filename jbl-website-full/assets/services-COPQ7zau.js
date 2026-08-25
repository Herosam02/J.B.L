import{I as e,r as n,i as r}from"./layout-BnW1ESXn.js";const o=[["01","Alternative power","Solar and inverter systems designed to keep critical infrastructure online.","alt-power.html"],["02","Telecommunications","Reliable telecoms infrastructure, including FTTH and fibre deployment.","telecoms.html"],["03","Fibre hub systems","Fibre survey, design and implementation for high-capacity connectivity.","fibre.html"],["04","BTS operations","Maintenance, integration and support for base station infrastructure.","bts.html"],["05","Transmission links","Installation and maintenance of transmission links across demanding sites.","transmission.html"],["06","Energy systems","Power systems integration, maintenance and right-sized dimensioning.","energy.html"],["07","Network access","Routine access maintenance that keeps networks safe and available.","network-access.html"],["08","Security systems","CCTV installation and integrated site security solutions.","security.html"],["09","Vertical transport","Installation and support for dependable elevator systems.","vertical-transport.html"],["10","Products & supply","Electrical and mechanical products, materials and equipment integration.","products.html"]],l=`
  <section class="page-hero">
    <div class="page-hero-image" style="background-image:url('${e.tower}')"></div>
    <div class="page-hero-overlay"></div>
    <div class="page-hero-content">
      <p class="eyebrow light"><span></span> Capabilities</p>
      <h1>One partner.<br><em>Many possibilities.</em></h1>
      <p class="lede">From first survey to final handover, JBL brings the technical depth and field discipline to move infrastructure forward.</p>
    </div>
  </section>

  <section class="page-section">
    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span>Services</div>
    <div class="reveal" style="margin-bottom:50px">
      <p class="eyebrow"><span></span> What we do</p>
      <h2>Ten capabilities,<br>one <em>standard.</em></h2>
      <p class="body" style="margin-top:24px;max-width:560px">Our services span electrical engineering, telecommunications, power systems and infrastructure support — all delivered with the same commitment to safety and excellence.</p>
    </div>
    <div class="service-grid">
      ${o.map(([s,a,t,i])=>`<a class="service-card reveal" href="${i}"><span>${s}</span><h3>${a}</h3><p>${t}</p><span style="position:absolute;right:21px;bottom:19px;color:var(--orange);font-size:22px">↗</span></a>`).join("")}
    </div>
  </section>

  <section class="page-section alt">
    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span>Services</div>
    <div class="grid-2" style="align-items:center">
      <div class="reveal">
        <p class="eyebrow"><span></span> Ready to start?</p>
        <h2>Tell us what<br>you're <em>building.</em></h2>
        <p class="body" style="margin-top:24px">Whether it is a single site or a multi-site rollout, our team is ready to understand your needs and deliver a dependable solution.</p>
        <a class="button button-primary" href="contact.html" style="margin-top:30px">Start a conversation <span>↗</span></a>
      </div>
      <div class="image-block reveal" style="background-image:url('${e.technician}')"></div>
    </div>
  </section>
`;document.querySelector("#app").innerHTML=n("Services",l);r();
