// @flow

import assets from './assets';
import Entity from './entity';
import GameCanvas from './canvas';
import { type Bounds, type Point } from './mathTypes';

export default class ToolPalette extends Entity {
  wasMouseDown: boolean;

  wallToolBounds: Bounds;

  wallToolImage: Image;

  wallGrabPos: Point;

  constructor(canvas: GameCanvas) {
    super();
    this.fighterToolBounds = {
      x: canvas.width / 2 - 128 - 8,
      y: (canvas.height - 120) * 0.84,
    };
  }

  load() {
    return assets.loadImage('./images/fighter.png').then((img) => {
      this.fighterToolImage = img;
      this.fighterToolBounds.height = img.height / 4;
      this.fighterToolBounds.width = img.width / 4;
    });
  }

  draw(canvas: GameCanvas) {
    canvas.drawImage(
      this.fighterToolImage,
      this.fighterToolBounds.x,
      this.fighterToolBounds.y,
      this.fighterToolBounds.width,
      this.fighterToolBounds.height,
    );
  }

  update() {
  }
}
