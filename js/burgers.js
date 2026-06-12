const foods = ['🍔', '🍔', '🍔', '🍟', '🌮', '🍕', '🌯', '🥙'];

function spawnBurger() {
  const el = document.createElement('span');
  el.className = 'burger';
  el.textContent = foods[Math.floor(Math.random() * foods.length)];
  el.style.left = Math.random() * 100 + 'vw';

  const duration = 2.5 + Math.random() * 3;
  el.style.animationDuration = duration + 's';
  el.style.fontSize = (1.5 + Math.random() * 2) + 'rem';

  document.body.appendChild(el);
  setTimeout(() => el.remove(), duration * 1000);
}

setInterval(spawnBurger, 300);
