const messages = [
  '¡Concentrate!',
  'yo también quiero power nap',
  'hoy me voy a perder casi todo el día linda',
  'te quiero 🐾',
  'me encantas',
  'no me regañes',
  'woof woof',
  'cafecito y a la acción',
];

const margin = 90;

// place dogs without overlapping each other
const placed = [];

messages.forEach(msg => {
  let x, y, attempts = 0;

  do {
    x = margin + Math.random() * (window.innerWidth  - margin * 2);
    y = margin + Math.random() * (window.innerHeight - margin * 2);
    attempts++;
  } while (attempts < 30 && placed.some(p => Math.hypot(p.x - x, p.y - y) < 160));

  placed.push({ x, y });

  const dog = document.createElement('div');
  dog.className = 'dog';
  dog.innerHTML = `<div class="speech-bubble">${msg}</div>🐶`;
  dog.style.left = x + 'px';
  dog.style.top  = y + 'px';
  dog.style.animationDelay = (Math.random() * 1.5).toFixed(2) + 's';

  document.body.appendChild(dog);
});
