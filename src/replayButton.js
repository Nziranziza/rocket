export default class Replay {
  constructor() {
    this.clicked = false;
    this.replayButton = document.getElementById('replay');
    this.replayButton.addEventListener('click', () => {
      this.replay();
    });
  }

  replay() {
    this.clicked = true;
  }
}
