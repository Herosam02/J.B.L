import{r as e,I as a,i as t}from"./layout-BnW1ESXn.js";const o=`
  <section class="page-hero">
    <div class="page-hero-image" style="background-image:url('${a.night}')"></div>
    <div class="page-hero-overlay"></div>
    <div class="page-hero-content">
      <p class="eyebrow light"><span></span> Connect</p>
      <h1>Let's build<br><em>what's next.</em></h1>
      <p class="lede">Have a project in mind, or need a dependable engineering partner? Tell us where you're headed.</p>
    </div>
  </section>

  <section class="page-section dark">
    <div class="breadcrumb" style="color:rgba(255,255,255,.5)"><a href="index.html" style="color:rgba(255,255,255,.5)">Home</a><span>/</span>Contact</div>
    <div class="grid-2" style="gap:80px">
      <div class="reveal">
        <p class="eyebrow light"><span></span> Start a conversation</p>
        <h2 style="color:#fff">Let's talk.</h2>
        <p class="body" style="color:#aaa;margin-top:24px;max-width:380px">Whether it is a single site or a multi-site rollout, our team is ready to understand your needs and plan a safe, dependable delivery.</p>
        <div class="contact-details">
          <a href="mailto:jblengineering1@gmail.com">jblengineering1@gmail.com</a>
          <a href="tel:07044440562">0704 444 0562</a>
          <span>5, Road 2, Oluode Estate,<br>Oluyole Extension, Ibadan</span>
          <span>38, Opeifa Street,<br>Anthony Village, Lagos</span>
        </div>
      </div>
      <form class="contact-form reveal">
        <label>Name<input required type="text" name="name" placeholder="Your name"></label>
        <label>Email<input required type="email" name="email" placeholder="you@company.com"></label>
        <label>What can we help with?<select name="service"><option>Electrical engineering</option><option>Telecommunications</option><option>Power systems</option><option>Maintenance & support</option><option>Careers</option><option>Other</option></select></label>
        <label>Message<textarea required name="message" rows="4" placeholder="Tell us a little about your project..."></textarea></label>
        <button class="button button-primary" type="submit">Send enquiry <span>↗</span></button>
        <p class="form-message" role="status"></p>
      </form>
    </div>
  </section>
`;document.querySelector("#app").innerHTML=e("Contact",o);t();
