// @flow
export default (operation): string => {
  if (operation === '/') {
    return '÷';
  }
  if (operation === '*') {
    return 'x';
  }

  return operation;
};
