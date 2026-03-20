// shared.js — injects nav, footer, mobile menu, and scroll animations

const NAV_HTML = `
<nav>
  <a href="index.html" class="nav-logo">
    <img src="https://framerusercontent.com/images/yzHXQ9xClE8o373j4yWtCoLI.png?scale-down-to=512" alt="Land of Influence" />
  </a>
  <ul class="nav-links">
    <li><a href="influencers.html">Influencers</a></li>
    <li><a href="marketing.html">Marketing</a></li>
    <li><a href="the-box.html">The Box</a></li>
    <li><a href="work.html">Our Work</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
  <a href="contact.html" class="nav-cta">Book a Call →</a>
  <div class="hamburger" id="hamburger">
    <span></span><span></span><span></span>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="index.html">Home</a>
  <a href="influencers.html">Influencers</a>
  <a href="marketing.html">Marketing</a>
  <a href="the-box.html">The Box</a>
  <a href="work.html">Our Work</a>
  <a href="contact.html">Contact</a>
</div>`;

const MARQUEE_HTML = `
<div class="marquee-section">
  <div class="marquee-track">
    <span class="marquee-item">Influencer Marketing</span>
    <span class="marquee-item marquee-dot">✦</span>
    <span class="marquee-item">Growth Strategy</span>
    <span class="marquee-item marquee-dot">✦</span>
    <span class="marquee-item">Brand Partnerships</span>
    <span class="marquee-item marquee-dot">✦</span>
    <span class="marquee-item">The Box</span>
    <span class="marquee-item marquee-dot">✦</span>
    <span class="marquee-item">Campaign Management</span>
    <span class="marquee-item marquee-dot">✦</span>
    <span class="marquee-item">Content Creation</span>
    <span class="marquee-item marquee-dot">✦</span>
    <span class="marquee-item">Influencer Marketing</span>
    <span class="marquee-item marquee-dot">✦</span>
    <span class="marquee-item">Growth Strategy</span>
    <span class="marquee-item marquee-dot">✦</span>
    <span class="marquee-item">Brand Partnerships</span>
    <span class="marquee-item marquee-dot">✦</span>
    <span class="marquee-item">The Box</span>
    <span class="marquee-item marquee-dot">✦</span>
    <span class="marquee-item">Campaign Management</span>
    <span class="marquee-item marquee-dot">✦</span>
    <span class="marquee-item">Content Creation</span>
    <span class="marquee-item marquee-dot">✦</span>
  </div>
</div>`;

const BRANDS_HTML = `
<div class="brands-strip fade-up">
  <div class="brands-strip-header">
    <div>
      <p class="section-label">Trusted By</p>
      <h2 class="section-title">Brands that picked<br>our Marketing Agency</h2>
    </div>
    <p class="section-sub">We strategically grow the world's best brands.</p>
  </div>
  <div class="brands-grid">
    <img class="brand-logo" src="https://framerusercontent.com/images/hUNUpxiLNXI3P502KZnyhPGhpM.png?width=340" alt="Brand" />
    <img class="brand-logo" src="https://framerusercontent.com/images/YZhXSU03lv9tImhPThQR25WZmY.png?width=151" alt="Brand" />
    <img class="brand-logo" src="https://framerusercontent.com/images/iXaApeGH6dSSlM9boru4qX7GKQ.png?width=242" alt="Brand" />
    <img class="brand-logo" src="https://framerusercontent.com/images/YjoHhdyj2pg56nU5xSpXs2Lvh8.png?width=168" alt="Brand" />
    <img class="brand-logo" src="https://framerusercontent.com/images/BKdK2JFYlvw3COKOmdikF8rNNv4.png?width=340" alt="Brand" />
    <img class="brand-logo" src="https://framerusercontent.com/images/pZrYZi2ZpcvaWxGfoXSSevG7o.png?width=198" alt="Brand" />
  </div>
</div>`;

const CTA_BANNER_HTML = `
<div class="cta-banner fade-up">
  <h2 class="cta-banner-title">Hands on Deck. Let's put together your free campaign proposal.</h2>
  <a href="contact.html" class="btn-dark">Book a Call →</a>
</div>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-top">
    <div>
      <img class="footer-brand-logo" src="https://framerusercontent.com/images/wNCoqqxRUbwaSRavx7i0xZiAo.png?width=291" alt="Land of Influence" />
      <p class="footer-tagline">Influencer Marketing Made Easy</p>
      <div class="footer-socials">
        <a href="https://linkedin.com" class="social-btn" aria-label="LinkedIn">in</a>
        <a href="https://facebook.com" class="social-btn" aria-label="Facebook">f</a>
        <a href="https://instagram.com" class="social-btn" aria-label="Instagram">ig</a>
      </div>
    </div>
    <div>
      <p class="footer-col-title">Services</p>
      <ul class="footer-links">
        <li><a href="marketing.html">Growth Marketing</a></li>
        <li><a href="influencers.html">Influencers</a></li>
        <li><a href="influencers.html">Affiliates</a></li>
        <li><a href="the-box.html">The Box</a></li>
      </ul>
    </div>
    <div>
      <p class="footer-col-title">Contact Us</p>
      <ul class="footer-links">
        <li><a href="contact.html">Contact Page</a></li>
        <li><a href="https://calendly.com/cuba-percy/30min" target="_blank">Book a Call</a></li>
        <li><a href="mailto:info@landofinfluence.com">E-mail</a></li>
      </ul>
    </div>
    <div>
      <p class="footer-col-title">Socials</p>
      <ul class="footer-links">
        <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
        <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
        <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p class="footer-copy">All rights reserved. Land of Influence 2025</p>
    <p class="footer-copy">Cookies</p>
  </div>
</footer>`;

// Inject shared elements
document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

// Highlight active nav link
const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
  if (a.getAttribute('href') === path) a.classList.add('active');
});

// Hamburger toggle
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
});
document.getElementById('mobileMenu').addEventListener('click', (e) => {
  if (e.target.tagName === 'A') document.getElementById('mobileMenu').classList.remove('open');
});

// Scroll-triggered fade-up
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.08 });
function observeFadeUps() {
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}
document.addEventListener('DOMContentLoaded', observeFadeUps);
setTimeout(observeFadeUps, 100);
