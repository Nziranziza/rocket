// @flow
import GameCanvas from './canvas';
import ToolPalette from './toolPalette';
import GameplayGrid from './gameplayGrid';
import updateTime from './helper/updateTime';
import { VIEWPORT_WIDTH, SCREEN_VIEWPORT_RATIO } from './helper/getScreenSize';

document.getElementById('playing-space').style.width = `${VIEWPORT_WIDTH * SCREEN_VIEWPORT_RATIO}px`;

const gameCanvas = new GameCanvas(document.getElementById('main-canvas'));

const grid = new GameplayGrid();
const entities = [grid, new ToolPalette(gameCanvas, grid)];

grid.spawnRocket();

let time = 0;

function gameLoop() {
  const newTime = Date.now();
  const elapsedTimeInSec = (newTime - time) / updateTime();
  time = newTime;
  entities.forEach((entity) => {
    entity.update(elapsedTimeInSec);
  });
  gameCanvas.clear();
  entities.forEach((entity) => {
    entity.draw(gameCanvas);
  });
  requestAnimationFrame(gameLoop);
}

Promise.all(
  entities.map((entity) => entity.load()),
).then(() => {
  time = Date.now();
  requestAnimationFrame(gameLoop);
});
