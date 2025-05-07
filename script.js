// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Intersection Observer untuk animasi scroll
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show-section");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.3
  });

  sections.forEach(section => {
    section.classList.add("hidden-section");
    observer.observe(section);
  });

  // Inisialisasi AOS
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 200
  });
});

// Fungsi toggle detail artikel (utk readmore)
function toggleDetail(button) {
  const detail = button.nextElementSibling;
  detail.classList.toggle("d-none");
}
