const questionView = document.getElementById('question-view');
const resultView = document.getElementById('result-view');
const continueBtn = document.getElementById('btn-continue');

continueBtn.addEventListener('click', () => {
  questionView.classList.add('hidden');
  resultView.classList.remove('hidden');
  celebrate();
});
