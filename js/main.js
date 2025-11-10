// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We’ll get back to you soon.');
    form.reset();
  });
});
