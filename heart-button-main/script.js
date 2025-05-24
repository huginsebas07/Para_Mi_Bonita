gsap.to(".title", {}); 

const messages = [
  "Te amo mi Kate❤️",
  "enamorado de ti guapa",
  "Mi niña ❤️ ",
  "Mi Bonita ❤️",
  "Mi paz en este mundo loco 🌍🕊️",
  "Amarte es mi superpoder 🦸‍♂️❤️",
  "Eres mi canción favorita 🎶💕",
  "No necesito más, solo a ti 😘",
  "Tu sonrisa ilumina mi vida 🌟😄",
  "Desde que llegaste, todo cambió 💘",
  "Mi corazón late por ti ❤️🔊",
  "A tu lado, todo tiene sentido 🧭💑",
  "Tu amor me hace volar 🕊️💓",
  "Solo tú sabes cómo hacerme feliz 😊❤️",
  "Amarte es lo mejor que me ha pasado 💝",
  "Me encantas más cada día 💗",
  "Tú eres mi persona favorita 💑🌟",
  "Eres mi todo 💖",
  "Mi cielo 🌈",
  "Mi vida 🥰",
  "Contigo siempre 💫",
  "Mi corazón 💘",
  "Mi sol ☀️",
  "Mi mundo 🌍",
  "Solo tú 💓",
  "Amor eterno 💍",
  "Eres mi alegría 😊",
  "Mi razón de sonreír 😄",
  "Eres mi inspiración ✨",
  "Esto es para ver si leyo todo jaja... me envias un Hola Sebas ",
  "Mi refugio seguro 🏡",
  "Sin ti no soy nada 💔",
  "Cada día más enamorado 💞",
  "Eres mi sueño hecho realidad 🌟",
  "Gracias por existir 🙏",
  "Eres mi todo y más 💝",
  "Contigo soy feliz 😍",
  "Eres mi felicidad diaria 🌸",
  "Por siempre tuyo 💌"
];
];


let messageIndex = 0;

const button = document.querySelector(".button.heart");
const container = document.getElementById("bubble-container");

button.addEventListener("click", () => {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  bubble.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const rect = button.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  bubble.style.left = `${x}px`;
  bubble.style.top = `${y}px`;

  container.appendChild(bubble);

  const angle = Math.random() * Math.PI * 2; 
  const radius = 200 + Math.random() * 150; 
  const randomX = Math.cos(angle) * radius;
  const randomY = Math.sin(angle) * radius;

  gsap.fromTo(
    bubble,
    { opacity: 1, x: 0, y: 0, scale: 1 },
    {
      x: randomX,
      y: randomY,
      opacity: 0,
      scale: 1.5,
      duration: 4,
      ease: "power2.out",
      onComplete: () => bubble.remove()
    }
  );
});

const text = "I love You";
const element = document.getElementById("typewriter");

let index = 0;
let typing = true;

function typeLoop() {
  if (typing) {
    if (index <= text.length) {
      element.textContent = text.slice(0, index);
      index++;
      setTimeout(typeLoop, 100);
    } else {
      setTimeout(() => {
        typing = false;
        index = text.length - 1;
        typeLoop();
      }, 1500);
    }
  } else {
    if (index >= 0) {
      element.textContent = text.slice(0, index);
      index--;
      setTimeout(typeLoop, 50);
    } else {
      element.textContent = "";
      setTimeout(() => {
        typing = true;
        index = 0;
        typeLoop();
      }, 500);
    }
  }
}

typeLoop();
