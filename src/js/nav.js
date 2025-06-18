function mobileNav() {
  const mobileNavIcon = document.getElementById('mobileNavIcon');
  const mobileNav = document.getElementById('mobileNav');
  const icon = document.querySelector('.icon-toggle use');


  mobileNavIcon.addEventListener('click', function() {
    mobileNav.classList.toggle('hidden')

    const isBars = icon.getAttribute('xlink:href') === '#bars';
    icon.setAttribute('xlink:href', isBars ? '#xmark' : '#bars');
  })
}

export default mobileNav();