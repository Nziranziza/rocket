// @flow

export default class Score {
  constructor() {
    this.score = 0;
    this.scoreWrapper = document.getElementById('score');
    this.highestScoreWrapper = document.getElementById('highest-score');
    this.displayCurrentScore = this.score;
    this.saveHighestScore(0);
    this.displayHighestScore = this.highestScore;
  }

  increaseValueBy(value) {
    this.score = this.score + value;
    this.displayCurrentScore = this.score;
  }

  saveHighestScore(score: number) {
    if (score > this.highestScore || isNaN(this.highestScore)) {
      localStorage.setItem('highestScore', score);
      this.displayHighestScore = score;
    }
  }

  get highestScore() {
    return parseInt(localStorage.getItem('highestScore'), 10);
  }

  get value() {
    return this.score;
  }

  set displayCurrentScore(value: number) {
    this.scoreWrapper.textContent = value;
  }

  set displayHighestScore(value: number) {
    this.highestScoreWrapper.textContent = value;
  }

  resetScore() {
    this.score = 0;
    this.displayCurrentScore = this.score;
  }
}
