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

  // ====== Dark Mode with Cookie Support ======

  // Helper function to get cookie value
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }

  // Helper function to set cookie value
  function setCookie(name, value, days = 365) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
  }

  // Initialize cookie if it doesn't exist
  let darkModeCookie = getCookie('darkMode');
  if (darkModeCookie === null) {
    setCookie('darkMode', '0');
    darkModeCookie = '0';
  }

  const toggleBtn = document.getElementById('darkModeToggle');

  // Apply dark mode on page load based on cookie
  if (darkModeCookie === '1') {
    document.documentElement.classList.add('dark-mode');
    if (toggleBtn) {
      toggleBtn.textContent = "☀️ Light Mode";
    }
  } else {
    if (toggleBtn) {
      toggleBtn.textContent = "🌙 Dark Mode";
    }
  }

// Toggle dark mode on button click
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark-mode');

      // Update cookie and button text
      if (document.documentElement.classList.contains('dark-mode')) {
        setCookie('darkMode', '1');
        toggleBtn.textContent = "☀️ Light Mode";
      } else {
        setCookie('darkMode', '0');
        toggleBtn.textContent = "🌙 Dark Mode";
      }
    });
  }
}

export default mobileNav();