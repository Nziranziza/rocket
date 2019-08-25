export default class Answer {
    constructor(answerField) {
        this.isSubmitted = false;
        this.answerField = answerField;
        this.answerField.addEventListener('input', (event) => {
            console.log(answerField.value);
        });
        
        this.answerField.addEventListener('keydown', ({ key })=> {
            if(key === 'Enter') {
                this.isSubmitted = true;
            }
        });
        this.answerField.focus();
    }

    getValue() {
        return parseFloat(this.answerField.value);
    }

    setValue() {
        this.answerField.value = '';
        this.isSubmitted = false;
    }
}
