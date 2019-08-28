export default class Answer {
  constructor() {
    this.isSubmitted = false;
    this.answerField = document.getElementById('answer');
    this.answerField.addEventListener('keydown', ({ key }) => {
      if (key === 'Enter') {
        this.isSubmitted = true;
      }
    });
    this.answerField.focus();
  }

  get value() {
    return parseFloat(this.answerField.value);
  }

  clear() {
    this.answerField.value = '';
    this.isSubmitted = false;
  }
}
