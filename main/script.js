const toggleDark = document.getElementById("toggle-darkmode");
toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleDark.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

document.getElementById("btn-saludo").addEventListener("click", () => {
  alert("¡Hola, Yohan! 😄 Bienvenido a tu portafolio animado.");
});

function mostrarMensaje() {
  const mensaje = prompt("Escribe tu mensaje:");
  if (mensaje?.trim()) alert("Gracias por tu mensaje: " + mensaje);
  else alert("Por favor, escribe algo.");
}

const cards = document.querySelectorAll('.work-card');
const mostrarCards = () => {
  const trigger = window.innerHeight * 0.85;
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) card.classList.add('visible');
  });
};
window.addEventListener('scroll', mostrarCards);
mostrarCards();

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});
