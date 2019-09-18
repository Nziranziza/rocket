import fs from 'fs';
import path from 'path';
import ToolPalette from '../toolPalette';
import Canvas from '../canvas';

const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');
document.documentElement.innerHTML = html.toString();
jest
  .dontMock('fs');

describe('Test toolPalette class', () => {
  let toolPalette;
  beforeEach(() => {
    toolPalette = new ToolPalette(new Canvas(document.getElementById('main-canvas')));
  });

  it('should initialize toolPalette', () => {
    expect(toolPalette).toBeDefined();
  });
});
