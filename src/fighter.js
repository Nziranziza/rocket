// @flow

import assets from './assets';
import Entity from './entity';
import GameCanvas from './canvas';

export default class Rocket extends Entity {
  xPosition: number;

  yPosition: number;

  opacity: number;

  image: Image;

  constructor(xPosition: number, yPosition: number) {
    super();
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.opacity = 1;
  }

  load() {
    return assets.loadImage('./images/fighter.png').then((img) => {
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
      1.0,
      this.opacity,
    );
  }

  update() {
  }
}
