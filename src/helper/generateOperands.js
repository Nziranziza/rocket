// @flow

export default (operator: string) => {
  const lastNumber = Math.floor(Math.random() * 10) + 1;
  let firstNumber = Math.floor(Math.random() * 10) + 1;
  if (operator === '/') {
    firstNumber *= lastNumber;
  }
  return {
    firstNumber,
    lastNumber,
  };
};
