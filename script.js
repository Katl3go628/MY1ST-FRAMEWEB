//FRAME DIGITAL interactions — no framework required.
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open'); menuToggle?.setAttribute('aria-expanded', 'false');
}));
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else revealItems.forEach(item => item.classList.add('is-visible'));
const glow = document.querySelector('.cursor-glow');
if (glow && matchMedia('(pointer:fine)').matches) window.addEventListener('pointermove', event => {
  glow.style.left = `${event.clientX - 140}px`; glow.style.top = `${event.clientY - 140}px`;
}, { passive: true });
if (matchMedia('(hover:hover) and (pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect(), x = (event.clientX - rect.left) / rect.width - .5, y = (event.clientY - rect.top) / rect.height - .5;
      card.style.transform = `perspective(1100px) rotateY(${x * 4}deg) rotateX(${-y * 3}deg) translateY(-2px)`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform = card.classList.contains('hero-visual') ? 'perspective(1100px) rotateY(-5deg) rotateX(2deg)' : ''; });
  });
}
const planSelect = document.querySelector('#plan');
document.querySelectorAll('[data-plan]').forEach(button => button.addEventListener('click', () => { if (planSelect) planSelect.value = button.dataset.plan; }));
// Replace with your real inbox. mailto opens the visitor's email application; it does not send automatically.
const BUSINESS_EMAIL = 'masingitlotlo@gmail.com';
const form = document.querySelector('#contactForm'), status = document.querySelector('#formStatus');
form?.addEventListener('submit', event => {
  event.preventDefault(); if (!form.reportValidity()) return;
  const data = new FormData(form), subject = `FRAME DIGITAL project enquiry — ${data.get('plan')}`;
  const body = [`Name: ${data.get('name')}`, `Email: ${data.get('email')}`, `Business: ${data.get('business') || 'Not provided'}`, `Package: ${data.get('plan')}`, `Budget: ${data.get('budget') || 'Not sure yet'}`, '', 'Project details:', data.get('message') || 'No details provided.'].join('\n');
  status.textContent = 'Opening your email app with the enquiry details…';
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
document.querySelector('#year').textContent = new Date().getFullYear();

// Interactive package estimate (indicative only; final quote depends on scope).
const quotePlan = document.querySelector('#quotePlan');
const quoteHosting = document.querySelector('#quoteHosting');
const quoteCare = document.querySelector('#quoteCare');
const quoteOnce = document.querySelector('#quoteOnce');
const quoteMonthly = document.querySelector('#quoteMonthly');
const formatRand = value => 'R' + Number(value).toLocaleString('en-ZA');
function updateQuote() {
  if (!quotePlan || !quoteOnce || !quoteMonthly) return;
  quoteOnce.textContent = formatRand(quotePlan.value);
  const monthly = (quoteHosting?.checked ? 250 : 0) + (quoteCare?.checked ? 450 : 0);
  quoteMonthly.textContent = formatRand(monthly) + '/month';
}
[quotePlan, quoteHosting, quoteCare].forEach(el => el?.addEventListener('change', updateQuote));
updateQuote();
document.querySelector('#useQuote')?.addEventListener('click', () => {
  const plan = quotePlan?.selectedOptions[0]?.textContent.split(' — ')[0] || 'Website package';
  const planField = document.querySelector('#plan');
  if (planField) planField.value = plan;
  const messageField = document.querySelector('#message');
  if (messageField) messageField.value = `Please quote me for ${plan}. Estimated once-off build: ${quoteOnce?.textContent}. Monthly add-ons: ${quoteMonthly?.textContent}.`;
  document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'});
});
