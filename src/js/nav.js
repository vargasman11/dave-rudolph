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
  })

// Toggle submenus inside mobile nav
  const submenuToggles = mobileNav.querySelectorAll('.toggle-submenu');
  submenuToggles.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const submenu = btn.nextElementSibling;

      // expand/collapse submenu
      if (submenu.classList.contains('max-h-0')) {
        submenu.classList.remove('max-h-0');
        submenu.classList.add('max-h-96');
        btn.style.transform = 'rotate(180deg)'; // rotate arrow down→up
      } else {
        submenu.classList.remove('max-h-96');
        submenu.classList.add('max-h-0');
        btn.style.transform = 'rotate(0deg)';
      }
    });
  });

  // Dark Mode
  const toggleBtn = document.getElementById('darkModeToggle');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Update button text
    if (document.body.classList.contains('dark-mode')) {
      toggleBtn.textContent = "☀️ Light Mode";
    } else {
      toggleBtn.textContent = "🌙 Dark Mode";
    }
  });
  
}

export default mobileNav();
