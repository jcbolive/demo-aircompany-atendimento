const cta = document.querySelector('[data-cta]');

if (cta) {
  cta.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(cta.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}
