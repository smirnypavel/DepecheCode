(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const mobileMenuHome = document.querySelector('#home-link');
  const mobileMenuAbout = document.querySelector('#about-link');
  const mobileMenuCustomers = document.querySelector('#customer-link');
  const mobileMenuProducts = document.querySelector('#products-link');
  const mobileMenuContacts = document.querySelector('#contacts-link');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
    ? 'disableBodyScroll'
    : 'enableBodyScroll';
  bodyScrollLock[scrollLockMethod](document.body);

  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  mobileMenuHome.addEventListener('click', toggleMenu);
  mobileMenuCustomers.addEventListener('click', toggleMenu);
  mobileMenuAbout.addEventListener('click', toggleMenu);
  mobileMenuProducts.addEventListener('click', toggleMenu);
  mobileMenuContacts.addEventListener('click', toggleMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
  });
})();
