const canvas = document.getElementById('sparkles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const particles = [];
const count = 120;

const colors = ['#ffe8a0', '#ffd06e', '#ffb347', '#fff4d6', '#ffecd2', '#ffffff'];

class Sparkle {
  constructor() { this.reset(true); }

  reset(initial = false) {
    this.x = Math.random() * canvas.width;
    this.y = initial ? Math.random() * canvas.height : canvas.height + 10;
    this.size = Math.random() * 2.5 + 0.5;
    this.speedY = Math.random() * 0.6 + 0.2;
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.opacity = Math.random();
    this.opacitySpeed = Math.random() * 0.015 + 0.005;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.twinkleOffset = Math.random() * Math.PI * 2;
    this.isStar = Math.random() > 0.6;
  }

  update() {
    this.y -= this.speedY;
    this.x += this.speedX;
    this.twinkleOffset += 0.05;
    this.opacity = 0.4 + Math.sin(this.twinkleOffset) * 0.6;

    if (this.y < -10) this.reset();
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.opacity);
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 6;

    if (this.isStar) {
      ctx.translate(this.x, this.y);
      ctx.beginPath();
      const s = this.size * 1.8;
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI) / 4;
        const r = i % 2 === 0 ? s : s * 0.4;
        const px = Math.cos(angle) * r;
        const py = Math.sin(angle) * r;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }
}

for (let i = 0; i < count; i++) {
  particles.push(new Sparkle());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animate);
}

animate();
