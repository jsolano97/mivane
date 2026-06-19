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

function explodeHearts(onDone) {
  const count = 45;
  const duration = 1.3;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.className = 'heart-burst';
    el.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    const angle = Math.random() * 2 * Math.PI;
    const distance = 120 + Math.random() * 320;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    const size = 1.5 + Math.random() * 2.5;
    const delay = Math.random() * 0.25;

    el.style.fontSize = size + 'rem';
    el.style.setProperty('--dx', dx + 'px');
    el.style.setProperty('--dy', dy + 'px');
    el.style.animationDuration = duration + 's';
    el.style.animationDelay = delay + 's';
    el.style.opacity = '0';

    document.body.appendChild(el);
    setTimeout(() => el.remove(), (duration + delay) * 1000 + 100);
  }

  if (onDone) setTimeout(onDone, (duration + 0.25) * 1000);
}

setInterval(spawnHeart, 600);
