export function setupNavigation() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuToggle?.contains(e.target) && !navLinks?.contains(e.target)) {
      navLinks?.classList.remove('active');
    }
  });
}