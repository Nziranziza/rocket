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

  getValue() {
    return parseFloat(this.answerField.value);
  }

  setValue() {
    this.answerField.value = '';
    this.isSubmitted = false;
  }
}
