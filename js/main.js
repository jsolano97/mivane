const messages = [
  "tengo mucha hambre... de vos",
  "me gustás más que la leche con galletas",
  "sos mi lugar favorito",
  "perdón por lo que te dije antes, no quería que se malinterpretara, en serio lo siento :(",
  "me hacés sonreír solo de pensar en vos",
  "qué divertido ir a Guana, qué emoción",
  "sos lo más rico que me pasó",
  "Saludáme a Abby, decile que quedó muy guapa",
  "Sos mi presente, y ningún pasado mío va a interferir en eso, por favor recordálo siempre",
  "te quiero mucho",
];

let current = 0;

const messageEl = document.getElementById('message');
const btn = document.getElementById('next-btn');

function showMessage(index) {
  messageEl.style.animation = 'none';
  messageEl.offsetHeight;
  messageEl.style.animation = '';
  messageEl.textContent = messages[index];
}

btn.addEventListener('click', () => {
  const isLast = current === messages.length - 1;
  if (isLast) {
    btn.disabled = true;
    explodeHearts(() => {
      current = 0;
      showMessage(current);
      btn.disabled = false;
    });
  } else {
    current++;
    showMessage(current);
  }
});

showMessage(current);
