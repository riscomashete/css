// Event delegation: handles all dropdowns
  document.addEventListener('click', function (e) {
    const toggle = e.target.closest('.dropdown-toggle');
    const openDropdown = document.querySelector('.dropdown.active');

    // If clicked a toggle
    if (toggle) {
      const parent = toggle.closest('.dropdown');
      const isOpen = parent.classList.contains('active');

      // Close any other open dropdown
      if (openDropdown && openDropdown !== parent) {
        openDropdown.classList.remove('active');
        const btn = openDropdown.querySelector('.dropdown-toggle');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      }

      // Toggle current
      parent.classList.toggle('active');
      toggle.setAttribute('aria-expanded', String(!isOpen));
      return; // stop here so it doesn't fall through to outside-click close
    }

    // Clicked outside: close if open
    if (openDropdown && !openDropdown.contains(e.target)) {
      openDropdown.classList.remove('active');
      const btn = openDropdown.querySelector('.dropdown-toggle');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }
  });
