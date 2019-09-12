import fs from 'fs';
import path from 'path';
import ReplayButton from '../replayButton';

const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');
document.documentElement.innerHTML = html.toString();
jest
  .dontMock('fs');

let replayButton;

describe('Test ReplayButton Class', () => {
  beforeEach(() => {
    replayButton = new ReplayButton();
  });
  it('should initialize class ReplayButton', () => {
    expect(replayButton.clicked).toBeFalsy();
    expect(replayButton.replayButton).toBeDefined();
  });

  it('should set clicked to true', () => {
    replayButton.replay();
    expect(replayButton.clicked).toBeTruthy();
  });
});
