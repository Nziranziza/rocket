import operationFormatter from '../../helper/formatOperation';

describe('format operation', () => {
  it('should return an operation as it is', () => {
    const operation = '+';
    expect(operationFormatter(operation)).toEqual(operation);
  });

  it('should format / to ÷', () => {
    expect(operationFormatter('/')).toEqual('÷');
  });

  it('should format * to x', () => {
    expect(operationFormatter('*')).toEqual('x');
  });
});
