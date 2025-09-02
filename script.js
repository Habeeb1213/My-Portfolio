const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const icon = hamburger.querySelector('i'); 

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');

  if (icon.classList.contains('ri-menu-line')) {
    icon.classList.remove('ri-menu-line');
    icon.classList.add('ri-close-line');
  } else {
    icon.classList.remove('ri-close-line');
    icon.classList.add('ri-menu-line');
  }
});
