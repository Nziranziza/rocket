// @flow

import assets from './assets.js';
import Entity from './entity.js';
import GameCanvas from './canvas.js';
import { type Bounds, doBoundsIntersect } from './mathTypes.js';

type State = 'DESCENDING' | 'ATTACKING';

export default class Monster extends Entity {
  xPosition: number;
  yPosition: number;
  scale: number;
  totalTime: number;
  lastAttackTime: number;
  image: Image;
  state: State;

  constructor(xPos: number, firstNumber: number, lastNumber: number) {
    super();
    this.xPosition = xPos;
    this.yPosition = 0;
    this.scale = 1;
    this.totalTime = 0;
    this.state = 'DESCENDING';
    this.firstNumber = firstNumber;
    this.secondNumber = lastNumber;
  }

  load() {
    return assets.loadImage('images/rocket.png').then(img => {
      this.image = img;
    });
  }

  draw(canvas: GameCanvas) {
    canvas.drawImage(
      this.image,
      this.xPosition,
      this.yPosition,
      128,
      128,
      this.scale,
      1,
      'source-over',
      this.firstNumber,
      this.secondNumber);
  }

  update(elapsedSec: number) {
    const target = this.target;
    
    if (this.state === 'DESCENDING') {
      this.yPosition = this.yPosition + 10 * elapsedSec;
    } else if (this.state === 'ATTACKING' && target) {
      if (target.isDestroyed) {
        this.state = 'DESCENDING';
      } else if (this.totalTime - this.lastAttackTime > Math.PI) {
        target.attack(1);
        this.lastAttackTime = this.totalTime;
      }
    }
    
    this.totalTime += elapsedSec;
    this.scale = 0.05 * Math.sin(2 * this.totalTime) + 1.0;
  }

  get yPos() {
    return this.yPosition;
  }
}