export default class Score {
  constructor() {
    this.score = 0;
    this.scoreWrapper = document.getElementById('score');
    this.scoreWrapper.textContent = this.score;
  }

  increaseValueBy(value) {
    this.score = this.score + value;
    this.scoreWrapper.textContent = this.score;
  }
}
