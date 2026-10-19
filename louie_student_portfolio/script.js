// Mobile navigation, active section links, copy buttons, and footer year.
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});

navItems.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
  });
});

const sections = document.querySelectorAll('main section[id]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navItems.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach((section) => observer.observe(section));

const toast = document.getElementById('toast');
let toastTimeout;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove('show'), 2200);
}

async function copyText(value) {
  try {
    await navigator.clipboard.writeText(value);
    showToast(`Copied: ${value}`);
  } catch (error) {
    // Fallback for browsers that do not allow clipboard access from local files.
    const temp = document.createElement('textarea');
    temp.value = value;
    temp.style.position = 'fixed';
    temp.style.opacity = '0';
    document.body.appendChild(temp);
    temp.select();
    try {
      document.execCommand('copy');
      showToast(`Copied: ${value}`);
    } catch (fallbackError) {
      showToast(`Please copy manually: ${value}`);
    }
    temp.remove();
  }
}

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', () => copyText(button.dataset.copy));
});

document.getElementById('year').textContent = new Date().getFullYear();
