const menu = document.querySelector('.menu');
const nav = document.querySelector('.desktop-nav');

menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  nav?.classList.toggle('mobile-open', !open);
});

document.getElementById('year').textContent = new Date().getFullYear();

// Replace every href="#" with your real social/streaming URLs before publishing.
