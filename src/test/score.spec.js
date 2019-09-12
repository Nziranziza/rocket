import fs from 'fs';
import path from 'path';
import Score from '../score';

const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');
document.documentElement.innerHTML = html.toString();
jest
  .dontMock('fs');

let scoreField;

describe('Test Score class', () => {
  beforeEach(() => {
    scoreField = new Score();
  });
  it('should initialize Score class', () => {
    expect(scoreField.score).toEqual(0);
    expect(scoreField.scoreWrapper).toBeDefined();
    expect(scoreField.highestScoreWrapper).toBeDefined();
    expect(scoreField.highestScore).toEqual(0);
  });

  it('should increase the score value', () => {
    scoreField.increaseValueBy(5);
    expect(scoreField.score).toEqual(5);
  });

  it('should get the score value', () => {
    expect(scoreField.value).toEqual(0);
  });

  it('should set displayCurrentScore', () => {
    scoreField.displayCurrentScore = 5;
    expect(scoreField.scoreWrapper.textContent).toEqual('5');
  });

  it('should reset the score', () => {
    scoreField.resetScore();
    expect(scoreField.score).toEqual(0);
    expect(scoreField.scoreWrapper.textContent).toEqual('0');
  });
});
