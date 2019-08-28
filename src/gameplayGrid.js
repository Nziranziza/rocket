// @flow

import Entity from './entity';
import GameCanvas from './canvas';
import Rocket from './rocket';
import Answer from './answerField';
import Score from './score';

const COLUMN_SIZE = 120;
const ROW_SIZE = 120;
const NUM_COLUMNS = 6;
const NUM_ROWS = 8;


export default class GameplayGrid extends Entity {
  rockets: Array<Rocket>;

  gameState;

  firstNumber: number;

  lastNumber: number;

  constructor() {
    super();
    this.rockets = [];
    this.answerField = new Answer();
    this.score = new Score();
  }

  load() {
  }


  spawnRocket() {
    this.firstNumber = Math.floor(Math.random() * 10) + 1;
    this.lastNumber = Math.floor(Math.random() * 10) + 1;
    const column = Math.floor(Math.random() * NUM_COLUMNS);
    const rocket = new Rocket(column * COLUMN_SIZE, this.firstNumber, this.lastNumber);
    rocket.load().then(() => this.rockets.push(rocket));
  }

  draw(canvas: GameCanvas) {
    this.rockets.forEach((rocket) => rocket.draw(canvas));

    if (this.gameState === 'LOST') {
      canvas.writeText('You lose!', '72px sans-serif', '#FF6347', 'center', canvas.width / 2, canvas.height / 2);
      this.score.saveHighestScore(this.score.value);
    }

    if (this.gameState === 'WIN') {
      this.rockets = [];
      this.gameState = 'PLAYING';
      this.spawnRocket();
      this.answerField.clear();
      this.score.increaseValueBy(5);
    }
  }

  update(elapsedTime: number) {
    if (this.gameState === 'LOST' || this.gameState === 'WIN') {
      return;
    }

    this.rockets.forEach((rocket) => {
      rocket.update(elapsedTime);

      if (rocket.yPos > NUM_ROWS * ROW_SIZE) {
        this.gameState = 'LOST';
      }

      if (this.answerField.isSubmitted) {
        this.gameState = this.isCorrectAnswer() ? 'WIN' : 'LOST';
      }
    });
  }

  get answer() {
    return this.firstNumber + this.lastNumber;
  }

  isCorrectAnswer() {
    return this.answerField.value === this.answer;
  }
}
