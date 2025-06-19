function mobileNav() {
  const mobileNavIcon = document.getElementById('mobileNavIcon');
  const mobileNav = document.getElementById('mobileNav');
  const icon = document.querySelector('.icon-toggle use');

  mobileNavIcon.addEventListener('click', function () {
    const isOpen = mobileNav.classList.contains('w-full');

    if (isOpen) {
      // Closing: shrink width to 0
      mobileNav.classList.remove('w-full');
      mobileNav.classList.add('w-0');
    } else {
      // Opening: expand width to full
      mobileNav.classList.remove('w-0');
      mobileNav.classList.add('w-full');
    }

    const isBars = icon.getAttribute('xlink:href') === '#bars';
    icon.setAttribute('xlink:href', isBars ? '#xmark' : '#bars');
  });
}

export default mobileNav();
