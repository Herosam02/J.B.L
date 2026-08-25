import{I as c,r as m,i as v}from"./layout-BnW1ESXn.js";const h=[["01","Alternative power","Solar and inverter systems designed to keep critical infrastructure online.","alt-power.html"],["02","Telecommunications","Reliable telecoms infrastructure, including FTTH and fibre deployment.","telecoms.html"],["03","Fibre hub systems","Fibre survey, design and implementation for high-capacity connectivity.","fibre.html"],["04","BTS operations","Maintenance, integration and support for base station infrastructure.","bts.html"],["05","Transmission links","Installation and maintenance of transmission links across demanding sites.","transmission.html"],["06","Energy systems","Power systems integration, maintenance and right-sized dimensioning.","energy.html"],["07","Network access","Routine access maintenance that keeps networks safe and available.","network-access.html"],["08","Security systems","CCTV installation and integrated site security solutions.","security.html"],["09","Vertical transport","Installation and support for dependable elevator systems.","vertical-transport.html"],["10","Products & supply","Electrical and mechanical products, materials and equipment integration.","products.html"]],g=[["Telecom base station power upgrade","Upgraded electrical and backup power systems across multiple telecom base stations.",c.technician,"project-1.html","Power systems"],["Fibre hub electrical & infrastructure setup","Installed structured cabling, power distribution systems, UPS integration, and equipment racks for a metropolitan fibre distribution hub.",c.towerSteel,"project-2.html","Fibre infrastructure"],["New BTS site electrical installation","Executed full electrical installations for newly constructed telecom tower sites, including generator systems, battery banks, shelter wiring and earthing systems.",c.construction,"project-3.html","Telecoms installation"]],b=`
  <section class="page-hero video-hero">
    <div class="video-card-wrapper">
      <div class="video-card" style="background-image:url('${c.night}')">
        <video id="heroVideo" data-src="/images/hero-video.mp4" preload="metadata" playsinline webkit-playsinline muted loop autoplay disablepictureinpicture disableremoteplayback aria-label="JBL Engineering showreel"></video>
        <div class="video-underlay"></div>
        <button class="video-volume-btn low" id="heroVolume" type="button" aria-label="Turn sound on" aria-pressed="false">
          <svg class="icon-low" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true"><path d="M7 9v6h4l5 5V4l-5 5H7z"/></svg>
          <svg class="icon-high" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
        </button>
        <button class="video-tap-play" id="heroTapPlay" type="button" aria-label="Play video">
          <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
        </button>
      </div>
    </div>
    <div class="video-hero-copy">
      <p class="eyebrow light"><span></span> Engineering progress, built to last</p>
      <h1>Powering the<br><em>next connection.</em></h1>
      <p class="lede">JBL Engineering delivers dependable electrical, telecoms and infrastructure solutions for the systems that keep modern life moving.</p>
      <div class="hero-buttons">
        <a class="button button-primary" href="services.html">Explore capabilities <span>&#8599;</span></a>
        <a class="text-link light-link" href="about.html">Meet JBL <span>&#8594;</span></a>
      </div>
    </div>
  </section>

  <section class="page-section">
    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span>Overview</div>
    <div class="grid-2">
      <div class="reveal">
        <p class="eyebrow"><span></span> About us</p>
        <h2>Infrastructure<br>with <em>intention.</em></h2>
      </div>
      <div class="reveal" style="padding-top:46px">
        <p class="body" style="font-size:22px;line-height:1.4;letter-spacing:-.03em;color:var(--ink);max-width:480px">JBL is an engineering company established in April 2007, specialising in telecommunications infrastructure installation and power system solutions.</p>
        <p class="body" style="margin-top:24px">Our core services include telecom site electrical installations, tower and base station support systems, power supply and backup solutions, equipment installation, and ongoing maintenance services.</p>
        <a class="text-link" href="about.html" style="margin-top:30px">Discover our story <span>→</span></a>
      </div>
    </div>
    <div class="stat-strip reveal">
      <div><strong data-count="17">0</strong><span>Years of experience</span></div>
      <div><strong data-count="10">0</strong><span>Core capabilities</span></div>
      <div><strong data-count="100">0</strong><span>Commitment to safety</span></div>
      <div class="stat-note">Built on partnerships.<br>Driven by precision.</div>
    </div>
  </section>

  <section class="page-section dark">
    <div class="breadcrumb" style="color:rgba(255,255,255,.5)"><a href="index.html" style="color:rgba(255,255,255,.5)">Home</a><span>/</span>Services</div>
    <div class="section-head">
      <div class="reveal"><p class="eyebrow light"><span></span> What we do</p><h2>One partner.<br><em>Many possibilities.</em></h2></div>
      <p class="body" style="max-width:360px">From first survey to final handover, JBL brings the technical depth and field discipline to move infrastructure forward.</p>
    </div>
    <div class="service-grid" style="border-color:rgba(255,255,255,.18)">
      ${h.map(([s,a,d,l])=>`<a class="service-card reveal" href="${l}" style="border-color:rgba(255,255,255,.18)"><span>${s}</span><h3 style="color:#fff">${a}</h3><p style="color:#a7a7a2">${d}</p><span style="position:absolute;right:21px;bottom:19px;color:var(--orange);font-size:22px">↗</span></a>`).join("")}
    </div>
  </section>

  <section class="page-section alt">
    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span>Projects</div>
    <div class="section-head">
      <div class="reveal"><p class="eyebrow"><span></span> Selected work</p><h2>Proof in<br><em>the field.</em></h2></div>
      <a class="text-link side" href="projects.html">View all projects <span>→</span></a>
    </div>
    ${g.map((s,a)=>`<article class="project-card reveal" data-category="${a===0?"power":a===1?"fibre":"power"}">
      <div class="project-visual" style="background-image:url('${s[2]}')"><span>0${a+1}</span></div>
      <div class="project-copy"><p class="project-type">${s[4]}</p><h3>${s[0]}</h3><p>${s[1]}</p><a href="${s[3]}" class="text-link" style="margin-top:24px">View project <span>→</span></a></div>
    </article>`).join("")}
  </section>

  <section class="page-section" style="background:var(--yellow);text-align:center">
    <div class="reveal" style="max-width:700px;margin:0 auto">
      <p class="eyebrow"><span></span> The JBL promise</p>
      <h2 style="font-size:clamp(44px,6vw,84px)">Good engineering<br>makes progress<br><em>possible.</em></h2>
      <p class="body" style="color:#342f25;max-width:420px;margin:30px auto 38px">We provide dependable electrical and telecom infrastructure that supports seamless connectivity and long-term performance.</p>
      <a class="button button-dark" href="contact.html">Build with JBL <span>↗</span></a>
    </div>
  </section>
`;document.querySelector("#app").innerHTML=m("Home",b);v();const e=document.getElementById("heroVideo"),r=document.getElementById("heroVolume"),o=document.getElementById("heroTapPlay");if(e){e.muted=!0,e.defaultMuted=!0,e.playsInline=!0,e.volume=1;const s=t=>o==null?void 0:o.classList.toggle("show",t),a=navigator.connection||navigator.mozConnection||navigator.webkitConnection,d=!!a&&(a.saveData===!0||/^(slow-)?2g$/.test(a.effectiveType||"")),l=()=>{e.src||(e.src=e.dataset.src,e.load())},n=()=>{if(!e.src)return;const t=e.play();t&&typeof t.catch=="function"&&t.then(()=>s(!1)).catch(()=>s(!0))},u=()=>e.classList.add("is-ready");if(e.addEventListener("loadeddata",()=>{u(),n()},{once:!0}),e.addEventListener("canplay",n),e.addEventListener("playing",()=>s(!1)),e.addEventListener("error",()=>s(!0)),d)s(!0);else{l();const t=()=>{e.paused&&n()};document.addEventListener("touchstart",t,{once:!0,passive:!0}),document.addEventListener("click",t,{once:!0})}o==null||o.addEventListener("click",t=>{t.stopPropagation(),l(),n()});let p=!0;if("IntersectionObserver"in window&&new IntersectionObserver(t=>t.forEach(i=>{p=i.isIntersecting,p?n():e.paused||e.pause()}),{threshold:.15}).observe(e),document.addEventListener("visibilitychange",()=>{document.hidden?e.paused||e.pause():p&&n()}),r){const t=()=>{const i=!e.muted;r.classList.toggle("high",i),r.classList.toggle("low",!i),r.setAttribute("aria-pressed",String(i)),r.setAttribute("aria-label",i?"Turn sound off":"Turn sound on")};r.addEventListener("click",i=>{i.stopPropagation(),e.muted=!e.muted,e.paused&&n(),t()}),e.addEventListener("volumechange",t),t(),window.matchMedia("(hover:hover) and (pointer:fine)").matches&&(e.addEventListener("click",()=>{e.muted=!e.muted,t()}),e.style.cursor="pointer")}}
