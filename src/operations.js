// @flow

export default class Operations {
  currentOperator: string;

  constructor() {
    this.operators = ['+', '-', '*', '/'];
  }

  get operator(): string {
    this.currentOperator = this.defaultOperatorIndex;
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
    if (!this.isValidOperator(this.defaultOperatorIndex)) {
      this.operator = value;
    }
  }

  get operatorIndex(): number {
    if (this.defaultOperatorIndex !== '4') {
      return this.operators.indexOf(this.operator);
    }
    return 4;
  }

  isValidOperator(operator: string): boolean {
    const operatorIndex = parseInt(operator, 10);
    return this.operators.length >= operatorIndex && operatorIndex > -1;
  }

  get defaultOperatorIndex() {
    return localStorage.getItem('currentOperator');
  }
}
