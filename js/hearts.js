const heartSymbols = ['❤️', '🩷', '💕', '💗', '💓', '💞', '♥'];

function spawnHeart() {
  const el = document.createElement('span');
  el.className = 'heart';
  el.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
  el.style.left = Math.random() * 100 + 'vw';

  const duration = 4 + Math.random() * 5;
  const size = 1 + Math.random() * 2;
  el.style.animationDuration = duration + 's';
  el.style.fontSize = size + 'rem';
  el.style.setProperty('--sway', (Math.random() * 60 - 30) + 'px');

  document.body.appendChild(el);
  setTimeout(() => el.remove(), duration * 1000);
}

function burstAt(x, y, count = 30, duration = 1.2) {
  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.className = 'heart-burst';
    el.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    const angle = Math.random() * 2 * Math.PI;
    const distance = 80 + Math.random() * 260;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    const size = 1.2 + Math.random() * 2.2;
    const delay = Math.random() * 0.2;

    el.style.left = x + 'px';
    el.style.top = y + 'px';
    el.style.fontSize = size + 'rem';
    el.style.setProperty('--dx', dx + 'px');
    el.style.setProperty('--dy', dy + 'px');
    el.style.animationDuration = duration + 's';
    el.style.animationDelay = delay + 's';

    document.body.appendChild(el);
    setTimeout(() => el.remove(), (duration + delay) * 1000 + 100);
  }
}

let ambientInterval = setInterval(spawnHeart, 600);

function celebrate() {
  const waves = 16;
  for (let i = 0; i < waves; i++) {
    setTimeout(() => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      burstAt(x, y, 32);
    }, i * 200);
  }

  clearInterval(ambientInterval);
  ambientInterval = setInterval(spawnHeart, 90);
}
