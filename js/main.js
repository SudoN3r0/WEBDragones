document.documentElement.classList.add("js");

// Menú móvil
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("menu");

toggle.addEventListener("click", () => {
  const abierto = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!abierto));
  toggle.setAttribute("aria-label", abierto ? "Abrir menú" : "Cerrar menú");
  nav.classList.toggle("open", !abierto);
});

nav.querySelectorAll("a").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menú");
    nav.classList.remove("open");
  });
});

// Aparición de secciones al hacer scroll
const elementos = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
        observer.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.15 });
  elementos.forEach((el) => observer.observe(el));
} else {
  elementos.forEach((el) => el.classList.add("visible"));
}

// Visor de imágenes de la galería
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector(".lightbox-caption");

document.querySelectorAll(".gallery-btn").forEach((boton) => {
  boton.addEventListener("click", () => {
    lightboxImg.src = boton.dataset.full;
    lightboxImg.alt = boton.querySelector("img").alt;
    lightboxCaption.textContent = boton.dataset.caption;
    lightbox.showModal();
  });
});

lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.close();
});

// Datos curiosos aleatorios
const datos = [
  "Los dragones pueden vivir más de mil años y no dejan de crecer en toda su vida.",
  "En la mitología china, los dragones traen la lluvia y la buena suerte, y no escupen fuego.",
  "La palabra «dragón» viene del griego drákōn, que significa «serpiente» o «el que mira fijamente».",
  "El dragón rojo aparece en la bandera de Gales desde hace siglos.",
  "Según las leyendas europeas, los dragones duermen sobre sus tesoros para protegerlos.",
  "Ignis distingue el oro falso del verdadero solo con olerlo.",
  "El dragón de Komodo es el lagarto más grande del mundo: puede medir 3 metros.",
  "San Jorge, patrón de Aragón y Cataluña, es famoso por vencer a un dragón."
];

const dato = document.getElementById("dato");
let indice = 0;

document.getElementById("nuevo-dato").addEventListener("click", () => {
  let nuevo;
  do {
    nuevo = Math.floor(Math.random() * datos.length);
  } while (nuevo === indice);
  indice = nuevo;

  dato.classList.add("fade");
  setTimeout(() => {
    dato.textContent = datos[indice];
    dato.classList.remove("fade");
  }, 300);
});

// Formulario de contacto (simulado, sin servidor)
const form = document.getElementById("form-contacto");
const estado = document.getElementById("form-estado");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = form.nombre.value.trim();
  const mensaje = form.mensaje.value.trim();

  if (!nombre || !mensaje) {
    estado.className = "form-estado";
    estado.textContent = "Rellena tu nombre y el mensaje, o Ignis se enfadará.";
    return;
  }

  estado.className = "form-estado ok";
  estado.textContent = `¡Gracias, ${nombre}! Un cuervo ya vuela con tu mensaje hacia Ignis. 🐦‍⬛`;
  form.reset();
});
