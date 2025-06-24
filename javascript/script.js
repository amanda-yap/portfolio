const navButton = document.getElementById('mobileMenuButton');
const navLinks = document.getElementById('navLinks');

navButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});