import{I as t,r as s,i}from"./layout-BnW1ESXn.js";const r=[["Telecom base station power upgrade","Upgraded electrical and backup power systems across multiple telecom base stations, including panel installations, grounding, and commissioning.",t.projectBtsPole,"project-1.html","Power systems","power"],["Fibre hub electrical & infrastructure setup","Installed structured cabling, power distribution systems, UPS integration, and equipment racks for a metropolitan fibre distribution hub.",t.projectFibreWiring,"project-2.html","Fibre infrastructure","fibre"],["New BTS site electrical installation","Executed full electrical installations for newly constructed telecom tower sites, including generator systems, battery banks, shelter wiring and earthing systems.",t.projectBtsSite,"project-3.html","Telecoms installation","power"]],l=`
  <section class="page-hero">
    <div class="page-hero-image" style="background-image:url('${t.site}')"></div>
    <div class="page-hero-overlay"></div>
    <div class="page-hero-content">
      <p class="eyebrow light"><span></span> Work</p>
      <h1>Proof in<br><em>the field.</em></h1>
      <p class="lede">Our work lives where plans meet reality: in live networks, active construction sites and the infrastructure people rely on every day.</p>
    </div>
  </section>

  <section class="page-section">
    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span>Projects</div>
    <div class="section-head">
      <div class="reveal"><p class="eyebrow"><span></span> Past projects</p><h2>Work with<br><em>weight.</em></h2></div>
      <div class="project-filters side">
        <button class="filter active" data-filter="all">All</button>
        <button class="filter" data-filter="power">Power</button>
        <button class="filter" data-filter="fibre">Fibre</button>
      </div>
    </div>
    ${r.map((e,a)=>`<article class="project-card reveal" data-category="${e[5]}">
      <div class="project-visual" style="background-image:url('${e[2]}')"><span>0${a+1}</span></div>
      <div class="project-copy"><p class="project-type">${e[4]}</p><h3>${e[0]}</h3><p>${e[1]}</p><a href="${e[3]}" class="text-link" style="margin-top:24px">View project <span>→</span></a></div>
    </article>`).join("")}
  </section>

  <section class="page-section alt">
    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span>Projects</div>
    <div class="reveal" style="margin-bottom:50px">
      <p class="eyebrow"><span></span> On site</p>
      <h2>From the<br><em>field.</em></h2>
    </div>
    <div class="grid-2 reveal">
      <div>
        <div class="image-block" style="background-image:url('${t.jblOrcaScaffold}')"></div>
        <p class="body" style="margin-top:16px;font-size:13px;color:var(--muted)">JBL team working at ITB Orca Mall project, Victoria Island, Lagos</p>
      </div>
      <div>
        <div class="image-block" style="background-image:url('${t.jblHitech}')"></div>
        <p class="body" style="margin-top:16px;font-size:13px;color:var(--muted)">Work in progress at Hitech / ITB project, Victoria Island</p>
      </div>
    </div>
  </section>

  <section class="page-section">
    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span>Projects</div>
    <div class="reveal" style="text-align:center;max-width:680px;margin:0 auto">
      <p class="eyebrow"><span></span> Have a project in mind?</p>
      <h2>Let's build<br>something <em>dependable.</em></h2>
      <p class="body" style="margin:24px auto 30px;max-width:420px">Tell us where you are headed and our team will help you plan a safe, well-executed delivery.</p>
      <a class="button button-primary" href="contact.html">Start a conversation <span>↗</span></a>
    </div>
  </section>
`;document.querySelector("#app").innerHTML=s("Projects",l);i();
