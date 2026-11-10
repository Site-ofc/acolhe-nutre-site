const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#main-nav');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    menu.classList.toggle('is-open', !isOpen);
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menu');
    });
  });
}

const mobileContact = document.querySelector('.mobile-contact');
const visualSections = document.querySelectorAll('.hero-visual, .team-portrait');

if (mobileContact && visualSections.length && 'IntersectionObserver' in window) {
  const visibleSections = new Set();
  const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) visibleSections.add(entry.target);
      else visibleSections.delete(entry.target);
    });
    mobileContact.classList.toggle('is-visible', visibleSections.size === 0);
  }, { threshold: 0 });

  visualSections.forEach((section) => contactObserver.observe(section));
}
