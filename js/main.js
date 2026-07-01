const questionView = document.getElementById('question-view');
const resultView = document.getElementById('result-view');
const yesBtn = document.getElementById('btn-yes');
const noBtn = document.getElementById('btn-no');

let dodging = false;
const proximityThreshold = 110;

function randomNoPosition() {
  const margin = 16;
  const rect = noBtn.getBoundingClientRect();
  const maxX = Math.max(margin, window.innerWidth - rect.width - margin);
  const maxY = Math.max(margin, window.innerHeight - rect.height - margin);
  const x = margin + Math.random() * (maxX - margin);
  const y = margin + Math.random() * (maxY - margin);
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
}

function activateDodge() {
  if (!dodging) {
    dodging = true;
    noBtn.classList.add('dodging');
  }
  randomNoPosition();
}

function dodgeIfClose(clientX, clientY) {
  const rect = noBtn.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const dist = Math.hypot(clientX - cx, clientY - cy);
  if (dist < proximityThreshold) {
    activateDodge();
  }
}

document.addEventListener('mousemove', (e) => dodgeIfClose(e.clientX, e.clientY));

document.addEventListener('touchstart', (e) => {
  const t = e.touches[0];
  if (t) dodgeIfClose(t.clientX, t.clientY);
}, { passive: true });

document.addEventListener('touchmove', (e) => {
  const t = e.touches[0];
  if (t) dodgeIfClose(t.clientX, t.clientY);
}, { passive: true });

// Fallback so the button keeps evading even if it's tapped directly
noBtn.addEventListener('pointerdown', (e) => {
  e.preventDefault();
  activateDodge();
});

noBtn.addEventListener('click', (e) => {
  e.preventDefault();
  activateDodge();
});

// Occasional jitter so the button never sits still for long on mobile
setInterval(() => {
  if (dodging) randomNoPosition();
}, 1400);

window.addEventListener('resize', () => {
  if (dodging) randomNoPosition();
});

yesBtn.addEventListener('click', () => {
  questionView.classList.add('hidden');
  resultView.classList.remove('hidden');
  celebrate();
});
