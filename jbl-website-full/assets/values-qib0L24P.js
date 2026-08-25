import{I as e,r as t,i as r}from"./layout-BnW1ESXn.js";const n=[["01","Integrity & honesty","We conduct all operations with transparency, accountability and trust."],["02","Safety first","We adhere to industry standards and protect people, assets and the environment."],["03","Customer-centred","We listen carefully, understand needs and deliver solutions that add real value."],["04","Commitment to excellence","Every project is executed with precision, professionalism and care."]],l=`
  <section class="page-hero">
    <div class="page-hero-image" style="background-image:url('${e.night}')"></div>
    <div class="page-hero-overlay"></div>
    <div class="page-hero-content">
      <p class="eyebrow light"><span></span> Company</p>
      <h1>Our<br><em>Values.</em></h1>
      <p class="lede">The principles that power our work — visible in every decision, on every site.</p>
    </div>
  </section>

  <section class="page-section" style="background:#e8e5df">
    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span>Values</div>
    <div class="reveal" style="margin-bottom:80px">
      <p class="eyebrow"><span></span> The JBL standard</p>
      <h2>Principles that<br><em>power our work.</em></h2>
    </div>
    <div class="value-grid">
      ${n.map(([s,a,i])=>`<article class="value-card reveal"><b>${s}</b><h3>${a}</h3><p>${i}</p></article>`).join("")}
    </div>
  </section>

  <section class="page-section">
    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span>Values</div>
    <div class="grid-2" style="align-items:center">
      <div class="reveal">
        <p class="eyebrow"><span></span> How values shape our work</p>
        <h2>From principle<br>to <em>practice.</em></h2>
        <p class="body" style="margin-top:24px">Our values are not posters on a wall. They show up in how we plan, how we work on site, and how we treat the people who trust us with their infrastructure.</p>
        <p class="body">When we say safety first, we mean it guides every decision. When we say customer-centred, we mean we listen before we build. When we say excellence, we mean it is visible in the details.</p>
      </div>
      <div class="image-block reveal" style="background-image:url('${e.control}')"></div>
    </div>
  </section>
`;document.querySelector("#app").innerHTML=t("Values",l);r();
