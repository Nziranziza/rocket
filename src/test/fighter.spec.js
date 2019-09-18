import path from 'path';
import fs from 'fs';
import Fighter from '../fighter';

const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');
document.documentElement.innerHTML = html.toString();
jest
  .dontMock('fs');

describe('Fighter test', () => {
  let fighter;
  beforeEach(() => {
    fighter = new Fighter(4, 5);
  });
  it('should initialize class Fighter', () => {
    expect(fighter.xPosition).toEqual(4);
    expect(fighter.yPosition).toEqual(5);
  });

  it('should load an Image', () => {
    expect(fighter.load()).toBeDefined();
  });
});
