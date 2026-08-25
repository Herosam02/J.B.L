import{I as e,r as t,i as n}from"./layout-BnW1ESXn.js";const r=[["Field Engineering","Site Engineer","Join our field teams delivering telecom and electrical installations across active sites. Engineering qualification and field experience required."],["Electrical","Electrical Technician","Install and maintain power distribution, backup systems and earthing across project sites. Electrical qualification and safety awareness required."],["Telecoms","Telecoms Installer","Install, integrate and maintain telecom equipment and infrastructure. Experience with BTS and transmission systems preferred."],["Operations","Project Coordinator","Coordinate field teams, logistics and project delivery. Strong organisation and communication skills required."]],o=`
  <section class="page-hero">
    <div class="page-hero-image" style="background-image:url('${e.team}')"></div>
    <div class="page-hero-overlay"></div>
    <div class="page-hero-content">
      <p class="eyebrow light"><span></span> Connect</p>
      <h1>Build your<br><em>career with JBL.</em></h1>
      <p class="lede">We invest in people who take safety seriously, care about quality, and want to build infrastructure that lasts.</p>
    </div>
  </section>

  <section class="page-section">
    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span>Careers</div>
    <div class="grid-2" style="align-items:center">
      <div class="reveal">
        <p class="eyebrow"><span></span> Why JBL</p>
        <h2>Work that<br><em>matters.</em></h2>
        <p class="body" style="margin-top:24px">At JBL, you work on infrastructure people rely on — telecom sites, power systems and networks that keep communities connected. We take safety seriously, invest in our people, and build long-term partnerships.</p>
        <p class="body">If that sounds like the kind of work you want to do, we would like to hear from you.</p>
      </div>
      <div class="image-block reveal" style="background-image:url('${e.construction}')"></div>
    </div>
  </section>

  <section class="page-section alt">
    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span>Careers</div>
    <div class="reveal" style="margin-bottom:50px"><p class="eyebrow"><span></span> Open positions</p><h2>Current <em>openings.</em></h2></div>
    <div class="grid-2">
      ${r.map(([a,s,i])=>`<div class="career-card reveal"><p class="dept">${a}</p><h3>${s}</h3><p>${i}</p><a class="apply" href="contact.html">Apply for this role →</a></div>`).join("")}
    </div>
  </section>

  <section class="page-section">
    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span>Careers</div>
    <div class="reveal" style="text-align:center;max-width:600px;margin:0 auto">
      <p class="eyebrow"><span></span> Don't see your role?</p>
      <h2>Send us your <em>details.</em></h2>
      <p class="body" style="margin:24px auto 30px;max-width:400px">We are always interested in hearing from skilled, safety-focused engineers and technicians. Reach out and tell us about yourself.</p>
      <a class="button button-primary" href="contact.html">Get in touch <span>↗</span></a>
    </div>
  </section>
`;document.querySelector("#app").innerHTML=t("Careers",o);n();
