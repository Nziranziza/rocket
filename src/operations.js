// @flow

export default class Operations {
  currentOperator: string;

  constructor() {
    this.operators = ['+', '-', '*', '/'];
  }

  get operator(): string {
    this.currentOperator = localStorage.getItem('currentOperator');
    if (this.currentOperator !== '4') {
      return this.operators[this.currentOperator];
    }
    const newValue = Math.floor(Math.random() * 3) + 1;
    return this.operators[newValue];
  }

  set operator(value: string) {
    this.currentOperator = value;
    localStorage.setItem('currentOperator', value);
  }

  set initialOperator(value: string) {
    if (isNaN(localStorage.getItem('currentOperator'))) {
      this.operator = value;
    }
  }

  get operatorIndex() {
    if (localStorage.getItem('currentOperator') !== '4') {
      return this.operators.indexOf(this.operator);
    }
    return 4;
  }
}
