const messages = [
  'Hola mi guapa, mini break',
  'Así me gusta que me hagas caso ;)',
  'Feliz tres meses y un día',
  'Me encantas',
  'Vení a comerme',
  'Te mando un besito',
  'Te amoooo mamacita',
  'Luego vemos bien lo de Puerto Viejo, pero mientras tanto te dejo un regalito para que lo disfrutes ❤'
];

const buttonLabels = [
  'Click aquí',
  'Seguí',
  'Seguí',
  'Seguí',
  'Seguí',
  'Seguí',
  'Seguí',
  'Ver más ❤'
];

const messageView = document.getElementById('message-view');
const messageText = document.getElementById('message-text');
const resultView = document.getElementById('result-view');
const nextBtn = document.getElementById('btn-next');

let index = 0;
messageText.textContent = messages[index];
nextBtn.textContent = buttonLabels[index];

nextBtn.addEventListener('click', () => {
  index++;

  if (index < messages.length) {
    messageText.classList.remove('message');
    void messageText.offsetWidth;
    messageText.classList.add('message');
    messageText.textContent = messages[index];
    nextBtn.textContent = buttonLabels[index];
  } else {
    messageView.classList.add('hidden');
    resultView.classList.remove('hidden');
  }
});
