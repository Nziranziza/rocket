import fs from 'fs';
import path from 'path';
import Operations from '../operations';

const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');
document.documentElement.innerHTML = html.toString();
jest
  .dontMock('fs');

const operations = new Operations();

describe('Test Operation class', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it('should initialize the operation', () => {
    expect(operations.operators.length).toEqual(4);
  });

  it('should get an operator', () => {
    operations.operator = 0;
    expect(operations.operator).toEqual('+');
  });

  it('should get a random operator', () => {
    operations.operator = 4;
    expect(operations.operator).toBeDefined();
  });

  it('should set an operator', () => {
    operations.operator = 1;
    expect(operations.currentOperator).toEqual(1);
  });

  it('should set initial operator', () => {
    operations.initialOperator = 3;
    expect(operations.currentOperator).toEqual(3);
  });

  it('should not set initial operator', () => {
    operations.operator = 4;
    operations.initialOperator = 3;
    expect(operations.currentOperator).not.toEqual(3);
  });

  it('should get operatorIndex different from 4', () => {
    expect(operations.operatorIndex).not.toEqual(4);
  });

  it('should get operatorIndex === 4', () => {
    localStorage.setItem('currentOperator', 4);
    expect(operations.operatorIndex).toEqual(4);
  });
});
