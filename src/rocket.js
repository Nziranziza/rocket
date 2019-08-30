// @flow

import assets from './assets';
import Entity from './entity';
import GameCanvas from './canvas';

type State = 'DESCENDING' | 'ATTACKING';

export default class Rocket extends Entity {
  xPosition: number;

  yPosition: number;

  scale: number;

  totalTime: number;

  lastAttackTime: number;

  image: Image;

  state: State;

  constructor(xPos: number, firstNumber: number, lastNumber: number, operator: string) {
    super();
    this.xPosition = xPos;
    this.yPosition = 0;
    this.scale = 0.2;
    this.totalTime = 0;
    this.state = 'DESCENDING';
    this.firstNumber = firstNumber;
    this.secondNumber = lastNumber;
    this.operator = operator;
  }

  load() {
    return assets.loadImage('./images/rocket.png').then((img) => {
      this.image = img;
    });
  }

  draw(canvas: GameCanvas) {
    canvas.drawImage(
      this.image,
      this.xPosition,
      this.yPosition,
      this.image.width,
      this.image.height,
      this.scale,
      1,
      'source-over',
      this.firstNumber,
      this.secondNumber,
      this.operator,
    );
  }

  update(elapsedSec: number) {
    this.yPosition = this.yPosition + 10 * elapsedSec;
    this.totalTime += elapsedSec;
    this.scale = 0.01 * Math.sin(2 * this.totalTime) + 0.7;
  }

  get yPos() {
    return this.yPosition;
  }
}
