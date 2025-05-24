gsap.to(".title", {}); 

const messages = [
  "Te amo ❤️",
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
  "Juntos por siempre ♾️",
  "Eres mi inspiración ✨",
  "Mi refugio seguro 🏡",
  "Sin ti no soy nada 💔",
  "Mi mejor aventura 🚀",
  "Cada día más enamorado/a 💞",
  "Eres mi sueño hecho realidad 🌟",
  "Gracias por existir 🙏",
  "Eres mi todo y más 💝",
  "Contigo soy feliz 😍",
  "Mi alma gemela 🔗",
  "Eres mi felicidad diaria 🌸",
  "Por siempre tuyo/a 💌"
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