import fs from 'fs';
import path from 'path';
import Canvas from '../canvas';

const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');
document.documentElement.innerHTML = html.toString();
jest
  .dontMock('fs');

let canvas;

describe('Test Canvas class', () => {
  beforeEach(() => {
    canvas = new Canvas(document.getElementById('main-canvas'));
  });
  it('should initialize a class', () => {
    expect(canvas.context).toBeDefined();
    expect(canvas.canvasElement).toBeDefined();
  });

  it('should draw on canvas', () => {
    const spy = jest.spyOn(canvas.context, 'drawImage');
    canvas.drawImage(new Image());
    expect(spy).toHaveBeenCalled();
  });

  it('should draw on canvas with text', () => {
    const spy1 = jest.spyOn(canvas.context, 'drawImage');
    const spy2 = jest.spyOn(canvas.context, 'fillText');
    canvas.drawImage(
      new Image(),
      3,
      4,
      5,
      6,
      1.0,
      1.0,
      'source-over',
      20,
      30,
      '+',
    );
    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });

  it('should clear the canvas', () => {
    const spy = jest.spyOn(canvas.context, 'fillRect');
    canvas.clear();
    expect(spy).toHaveBeenCalled();
  });

  it('should fillRect the canvas', () => {
    const spy = jest.spyOn(canvas.context, 'fillRect');
    canvas.fillRect();
    expect(spy).toHaveBeenCalled();
  });

  it('should fillRect the canvas', () => {
    const spy = jest.spyOn(canvas.context, 'fillRect');
    canvas.writeText();
    expect(spy).toHaveBeenCalled();
  });

  it('should get height', () => {
    expect(canvas.height).toEqual(1080);
  });

  it('should get width', () => {
    expect(canvas.width).toEqual(720);
  });

  it('should get viewportRatio', () => {
    expect(canvas.viewportRatio).toEqual(window.innerHeight / 1080);
  });

  it('should get htmlElement', () => {
    expect(canvas.htmlElement).toBeDefined();
  });
});
