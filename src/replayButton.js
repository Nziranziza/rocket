export default class Replay {
    constructor(replayButton) {
        this.replayButton = replayButton;
        this.replayButton.addEventListener('click', () => {
            this.replay();
        });
    }

    replay() {
        document.location.reload()
    }
}
