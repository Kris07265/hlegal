import '../scss/style.scss';

(() => {
  const burgerButton = document.querySelector('.header__box-burger');
  const closeMenuButton = document.querySelector('.header__nav-close');
  const headerNavigation = document.querySelector('.header__nav');

  burgerButton.addEventListener('click', () => {
    headerNavigation.classList.add('active');
  });

  closeMenuButton.addEventListener('click', () => {
    headerNavigation.classList.remove('active');
  });
})();
