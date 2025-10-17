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

  // ====== Dark Mode with localStorage ======

  // Get current theme from localStorage or system preference
  function getTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Apply theme to DOM
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', theme);
  }

  // Initialize theme on page load
  const currentTheme = getTheme();
  const toggleBtn = document.getElementById('darkModeToggle');

  // Update button text based on current theme
  if (toggleBtn) {
    toggleBtn.textContent = currentTheme === 'dark' ? "☀️ Light Mode" : "🌙 Dark Mode";

    // Toggle theme on button click
    toggleBtn.addEventListener('click', () => {
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      toggleBtn.textContent = newTheme === 'dark' ? "☀️ Light Mode" : "🌙 Dark Mode";

      // Update currentTheme for next toggle
      let currentTheme = getTheme();
    });
  }

  // Watch for system theme changes (optional but nice UX)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Only auto-update if user hasn't set a preference
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
      if (toggleBtn) {
        toggleBtn.textContent = e.matches ? "☀️ Light Mode" : "🌙 Dark Mode";
      }
    }
  });
}

export default mobileNav();