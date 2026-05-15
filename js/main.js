// Nav scroll shadow
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile hamburger
const hamburger = document.querySelector('.nav-hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

// Active nav link on scroll (index page only)
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.nav-links a');

if (sections.length && navLinks.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
}

// Fade-in on scroll
const fadeEls = document.querySelectorAll('.fade-in');

if (fadeEls.length) {
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  fadeEls.forEach(el => fadeObserver.observe(el));
}

// WhatsApp callback forms
const WA_NUMBER = '212665966629';

function buildWaUrl(name, phone, service) {
  const msg = `Bonjour, je m'appelle ${name}. Mon numéro : ${phone}. Besoin : ${service}. Pouvez-vous me rappeler ?`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

document.querySelectorAll('.js-wa-form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name    = form.querySelector('[name="nom"]').value.trim();
    const phone   = form.querySelector('[name="telephone"]').value.trim();
    const service = form.querySelector('[name="service"]').value;
    if (!name || !phone) return;
    window.open(buildWaUrl(name, phone, service), '_blank');
  });
});

// Hero scroll indicator
const heroScroll = document.querySelector('.hero-scroll');
if (heroScroll) {
  heroScroll.addEventListener('click', () => {
    document.querySelector('.stats-bar')?.scrollIntoView({ behavior: 'smooth' });
  });
}

// Animate stats counter
const statNums = document.querySelectorAll('.stat-num');

if (statNums.length) {
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const raw = el.textContent.trim();
      const num = parseFloat(raw.replace(/[^0-9.]/g, ''));
      const prefix = raw.match(/^[^0-9]*/)?.[0] || '';
      const suffix = raw.match(/[^0-9.]+$/)?.[0] || '';

      if (isNaN(num)) return;

      let start = 0;
      const duration = 1400;
      const step = 16;
      const increment = num / (duration / step);

      const timer = setInterval(() => {
        start = Math.min(start + increment, num);
        el.textContent = prefix + (Number.isInteger(num) ? Math.round(start) : start.toFixed(1)) + suffix;
        if (start >= num) clearInterval(timer);
      }, step);

      statObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => statObserver.observe(el));
}
