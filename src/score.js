export default class Score {

    constructor(scoreWrapper) {
        this.score = 0
        this.scoreWrapper = scoreWrapper;
        this.scoreWrapper.textContent = this.score;
    }
    setValue() {
        this.score = this.score + 5;
        this.scoreWrapper.textContent = this.score;
    }
}
