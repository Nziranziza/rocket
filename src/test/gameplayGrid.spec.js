import path from 'path';
import fs from 'fs';
import GameplayGrid from '../gameplayGrid';

const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');
document.documentElement.innerHTML = html.toString();
jest
  .dontMock('fs');

describe('Test gameplayGrid', () => {
  let gameplayGrid;
  beforeEach(() => {
    gameplayGrid = new GameplayGrid();
  });

  it('should initialize the GameplayGrid class', () => {
    expect(gameplayGrid.rockets.length).toEqual(0);
  });

  it('should spraw a rocket', () => {
    gameplayGrid.spawnRocket();
    expect(gameplayGrid.firstNumber).toBeDefined();
    expect(gameplayGrid.lastNumber).toBeDefined();
  });

  it('should get answer', () => {
    gameplayGrid.spawnRocket();
    expect(gameplayGrid.answer).toBeDefined();
  });

  it('should get an answer', () => {
    gameplayGrid.spawnRocket();
    expect(gameplayGrid.isCorrectAnswer()).toBeDefined();
  });

  it('should get Next Rocket', () => {
    gameplayGrid.getNextRocket();
    expect(gameplayGrid.rockets.length).toEqual(0);
  });
});
