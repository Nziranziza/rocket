class Replay {
  constructor() {
    this.replayButton = document.getElementById('replay');
    this.replayButton.addEventListener('click', () => {
      this.replay();
    });
  }

  replay() {
    document.location.reload();
  }
}
export default new Replay();
