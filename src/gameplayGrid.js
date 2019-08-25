// @flow

import assets from './assets.js';
import Entity from './entity.js';
import GameCanvas from './canvas.js';
import Monster from './rocket.js';
import { type Bounds } from './mathTypes.js';
import Answer from './answerField';
import Score from './score';
import Replay from './replayButton';

const COLUMN_SIZE = 120;
const ROW_SIZE = 120;
const NUM_COLUMNS = 6;
const NUM_ROWS = 8;

new Replay(document.getElementById('replay'));

export default class GameplayGrid extends Entity {
  monsters: Array<Monster>;
  gameState;
  firstNumber;
  lastNumber;

  constructor() {
    super();
    this.monsters = [];
    this.answerField = new Answer(document.getElementById('answer'));
    this.score = new Score(document.getElementById('score'));
  }

  load() {
  }


  spawnMonster() {
    this.firstNumber = Math.floor(Math.random() * 10) + 1;
    this.lastNumber = Math.floor(Math.random() * 10) + 1;
    const column = Math.floor(Math.random() * NUM_COLUMNS);
    const monster = new Monster(column * COLUMN_SIZE, this.firstNumber, this.lastNumber);
    monster.load().then(() => this.monsters.push(monster));
  }
  
  draw(canvas: GameCanvas) {
    this.monsters.forEach(monster => monster.draw(canvas));

    if (this.gameState === 'LOST') {
      canvas.writeText('You lose!', '72px sans-serif', '#FF6347', 'center', canvas.width / 2, canvas.height / 2);
    }

    if (this.gameState === 'WIN') {
      // canvas.writeText('You Win!', '72px sans-serif', '#228B22', 'center', canvas.width / 2, canvas.height / 2);
      this.monsters = [];
      this.gameState = 'PLAYING';
      this.spawnMonster();
      this.answerField.setValue();
      this.score.setValue();
    }
  }

  update(elapsedTime: number) {
    if (this.gameState === 'LOST' || this.gameState === 'WIN') {
      return;
    }

    this.monsters.forEach(monster => {

      monster.update(elapsedTime);

      if (monster.yPos > 735) {
        this.gameState = 'LOST';
      }

      if(this.answerField.getValue() == this.getAnswer() && this.answerField.isSubmitted) {
        this.gameState = 'WIN';
      }

      if(this.answerField.getValue() != this.getAnswer() && this.answerField.isSubmitted) {
        this.gameState = 'LOST';
      }

    });
  }
  getAnswer () {
    return this.firstNumber + this.lastNumber;
  }
}