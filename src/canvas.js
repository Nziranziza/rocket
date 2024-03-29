// @flow

import { VIEWPORT_HEIGHT, VIEWPORT_WIDTH, SCREEN_VIEWPORT_RATIO } from './helper/getScreenSize';

export default class GameCanvas {
  canvasElement: HTMLCanvasElement;

  context: CanvasRenderingContext2D;

  constructor(canvasElement: HTMLCanvasElement) {
    this.canvasElement = canvasElement;
    this.context = canvasElement.getContext('2d');

    canvasElement.setAttribute('height', window.innerHeight * 0.85);
    canvasElement.setAttribute('width', (VIEWPORT_WIDTH * SCREEN_VIEWPORT_RATIO));
  }

  drawImage(
    image: Image,
    x: number,
    y: number,
    width: number,
    height: number,
    scale: number = 1.0,
    opacity: number = 1.0,
    compositeOperation: string = 'source-over',
    firstNumber,
    secondNumber,
    operator,
  ) {
    const scaledWidth = width * scale;
    const scaledHeight = height * scale;
    const xAxis = (x - (scaledWidth - width) / 2) * SCREEN_VIEWPORT_RATIO;
    const yAxis = (y - (scaledHeight - height) / 2) * SCREEN_VIEWPORT_RATIO;
    this.context.save();
    this.context.globalCompositeOperation = compositeOperation;
    this.context.globalAlpha = opacity;
    this.context.drawImage(
      image,
      xAxis,
      yAxis,
      scaledWidth * SCREEN_VIEWPORT_RATIO,
      scaledHeight * SCREEN_VIEWPORT_RATIO,
    );
    this.context.font = '16px Roboto';
    this.context.fillStyle = '#031f53';
    if (firstNumber && secondNumber) {
      this.context.fillText(`${firstNumber} ${operator} ${secondNumber}`, xAxis, yAxis - 5);
    }
    this.context.restore();
  }

  clear() {
    this.context.fillStyle = '#00CAA0';
    this.context.fillRect(
      0,
      0,
      this.canvasElement.clientWidth,
      this.canvasElement.clientHeight,
    );
  }

  fillRect(
    style: string,
    x: number,
    y: number,
    width: number,
    height: number,
  ) {
    this.context.fillStyle = style;
    this.context.globalCompositeOperation = 'source-over';
    this.context.fillRect(
      x * SCREEN_VIEWPORT_RATIO,
      y * SCREEN_VIEWPORT_RATIO,
      width * SCREEN_VIEWPORT_RATIO,
      height * SCREEN_VIEWPORT_RATIO,
    );
  }

  writeText(
    text: string,
    font: string,
    color: string,
    alignment: string,
    x: number,
    y: number,
  ) {
    this.context.fillStyle = color;
    this.context.font = font;
    this.context.textAlign = alignment;
    this.context.fillText(
      text,
      x * SCREEN_VIEWPORT_RATIO,
      y * SCREEN_VIEWPORT_RATIO,
    );
  }

  get height() {
    return VIEWPORT_HEIGHT;
  }

  get width() {
    return VIEWPORT_WIDTH;
  }

  get viewportRatio() {
    return SCREEN_VIEWPORT_RATIO;
  }

  get htmlElement() {
    return this.canvasElement;
  }
}
