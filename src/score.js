export default class Score {
  constructor() {
    this.score = 0;
    this.scoreWrapper = document.getElementById('score');
    this.scoreWrapper.textContent = this.score;
  }

  setValue() {
    this.score = this.score + 5;
    this.scoreWrapper.textContent = this.score;
  }
}
