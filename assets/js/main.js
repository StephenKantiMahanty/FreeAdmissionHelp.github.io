/* Scroll-reveal: mark elements for animation */
document.addEventListener('DOMContentLoaded', function () {

  /* ── Navbar scroll effect ── */
  var navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  /* ── Mobile nav toggle ── */
  var navToggle = document.getElementById('navToggle');
  var navLinksList = document.getElementById('navLinks');

  navToggle.addEventListener('click', function () {
    navLinksList.classList.toggle('open');
  });

  /* Close mobile nav when a link is clicked */
  navLinksList.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinksList.classList.remove('open');
    });
  });

  /* ── Scroll-reveal animation ── */
  var revealTargets = document.querySelectorAll(
    '.service-card, .about-card, .step, .schedule-feature, .contact-item, ' +
    '.section-header, .about-text, .about-visual, .contact-form'
  );

  revealTargets.forEach(function (el) {
    el.classList.add('reveal');
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealTargets.forEach(function (el) {
    observer.observe(el);
  });

  /* Staggered delay for grid children */
  document.querySelectorAll('.services-grid .service-card').forEach(function (card, i) {
    card.style.transitionDelay = (i * 80) + 'ms';
  });

  document.querySelectorAll('.process-steps .step').forEach(function (step, i) {
    step.style.transitionDelay = (i * 100) + 'ms';
  });

  /* ── Contact form (demo — shows success message) ── */
  var form = document.getElementById('contactForm');
  var formSuccess = document.getElementById('formSuccess');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      formSuccess.style.display = 'block';
      form.reset();
      setTimeout(function () {
        formSuccess.style.display = 'none';
      }, 5000);
    });
  }
});
