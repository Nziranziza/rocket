export default class Answer {
  constructor() {
    this.isSubmitted = false;
    this.answerField = document.getElementById('answer');
    this.answerField.addEventListener('keydown', ({ key }) => {
      if (key === 'Enter') {
        this.isSubmitted = true;
        this.gunShoot.play();
      } else {
        this.loadGun.play();
      }
    });
    this.focus();
    this.loadGun = new Audio('./audio/gun-sound.m4a');
    this.gunShoot = new Audio('./audio/gunshoot-sound.m4a');
  }

  get value() {
    return parseFloat(this.answerField.value);
  }

  clear() {
    this.answerField.value = '';
    this.isSubmitted = false;
  }

  focus() {
    this.answerField.focus();
  }
}
