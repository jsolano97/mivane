const text = document.getElementById('main-text');

text.addEventListener('click', () => {
  text.classList.remove('shake');
  void text.offsetWidth;
  text.classList.add('shake');
});

text.addEventListener('animationend', (e) => {
  if (e.animationName === 'shake') {
    text.classList.remove('shake');
  }
});
