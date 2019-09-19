import generateOperands from '../../helper/generateOperands';

describe('generateOperands test', () => {
  it('should give some random numbers', () => {
    const { firstNumber, lastNumber } = generateOperands('+');
    expect(typeof firstNumber).toBe('number');
    expect(typeof lastNumber).toBe('number');
  });

  it('should give divisible numbers', () => {
    const { firstNumber, lastNumber } = generateOperands('/');
    expect(firstNumber % lastNumber).toEqual(0);
  });
});
