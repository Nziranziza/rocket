// @flow
import GameCanvas from './canvas';

export default class Entity {
  load() {
    throw new TypeError('Abstract class "Entity" cannot be instantiated directly.');
  }

  // eslint-disable-next-line no-unused-vars
  draw(_canvas: GameCanvas) {
    throw new TypeError('Abstract class "Entity" cannot be instantiated directly.');
  }

  // eslint-disable-next-line no-unused-vars
  update(_elapsedSec: number) {
    throw new TypeError('Abstract class "Entity" cannot be instantiated directly.');
  }
}
