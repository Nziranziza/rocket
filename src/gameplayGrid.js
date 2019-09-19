// @flow

import Entity from './entity';
import GameCanvas from './canvas';
import Rocket from './rocket';
import Answer from './answerField';
import Replay from './replayButton';
import Score from './score';
import Operations from './operations';
import formatOperator from './helper/formatOperation';
import generateOperands from './helper/generateOperands';

const COLUMN_SIZE = 120;
const ROW_SIZE = 120;
const NUM_COLUMNS = 6;
const NUM_ROWS = 8;


export default class GameplayGrid extends Entity {
  rockets: Array<Rocket>;

  gameState;

  firstNumber: number;

  lastNumber: number;

  currentOperation: string;

  booSound: any;

  constructor() {
    super();
    this.rockets = [];
    this.answerField = new Answer();
    this.replay = new Replay();
    this.score = new Score();
    this.operations = new Operations();
    this.displayOperator = document.getElementById('operations');
    this.operations.initialOperator = this.displayOperator.value;
    this.displayOperator.value = this.operations.operatorIndex;
    this.displayOperator.addEventListener('change', () => {
      this.operations.operator = this.displayOperator.value;
      this.getNextRocket();
      this.answerField.focus();
    });
    this.booSound = new Audio('../audio/crowd-boo-sound.mp3');
  }

  load() {
  }


  spawnRocket() {
    this.currentOperation = this.operations.operator;
    const { firstNumber, lastNumber } = generateOperands(this.currentOperation);
    this.firstNumber = firstNumber;
    this.lastNumber = lastNumber;
    const column = Math.floor(Math.random() * NUM_COLUMNS);
    const rocket = new Rocket(
      column * COLUMN_SIZE,
      this.firstNumber,
      this.lastNumber,
      formatOperator(this.currentOperation),
    );
    rocket.load().then(() => this.rockets.push(rocket));
  }

  draw(canvas: GameCanvas) {
    this.rockets.forEach((rocket) => rocket.draw(canvas));

    if (this.gameState === 'LOST') {
      canvas.writeText('You lose!', '50px sans-serif', '#FF6347', 'left', canvas.width / 2, canvas.height / 2);
      this.score.saveHighestScore(this.score.value);
    }

    if (this.gameState === 'WIN') {
      this.getNextRocket();
      this.score.increaseValueBy(5);
    }

    if (this.replay.clicked) {
      this.answerField.focus();
      this.getNextRocket();
      this.score.resetScore();
      this.replay.clicked = false;
    }
  }

  update(elapsedTime: number) {
    if (this.gameState === 'LOST' || this.gameState === 'WIN') {
      return;
    }

    this.rockets.forEach((rocket) => {
      rocket.update(elapsedTime);

      if (rocket.yPos > NUM_ROWS * ROW_SIZE) {
        this.gameState = this.playBooSound();
      }

      if (this.answerField.isSubmitted) {
        this.gameState = this.isCorrectAnswer() ? 'WIN' : this.playBooSound();
      }
    });
  }

  get answer() {
    return eval(`${this.firstNumber} ${this.currentOperation}  ${this.lastNumber}`);
  }

  isCorrectAnswer() {
    return this.answerField.value === this.answer;
  }

  getNextRocket() {
    this.rockets = [];
    this.gameState = 'PLAYING';
    this.spawnRocket();
    this.answerField.clear();
  }

  playBooSound(): string {
    this.booSound.play();
    return 'LOST';
  }
}
