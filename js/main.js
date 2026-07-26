const messages = [
  'Hola mi amor',
  '¿un mes ya?',
  'Que rapidooo',
  'Me encantas',
  'Estoy muy feliz de haberte conocido',
  'Disfruta tu viaje montones (saludos a Cata, dile que nunca me mandó la foto del regalo y estoy resentido)',
  'Te amoooo',
  'Por mas aventuras juntos'
];

const buttonLabels = [
  'Presioná aquí',
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
    celebrate();
  }
});
