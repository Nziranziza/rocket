module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'json', 'node'],
  testRegex: '(src/test/.*|(\\.|/)(test|spec))\\.(ts|js)x?$',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.(js)'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.js',
  },
  coveragePathIgnorePatterns: [
    'coverage',
    'node_modules',
    'mocks',
    'src/helper/mathTypes.js',
    'src/index.js',
    'src/entity.js',
    'src/toolPalette.js',
  ],
  setupFiles: ['jest-canvas-mock'],
  transform: {
    '^.+\\.(js)?$': 'babel-jest',
  },
  coverageThreshold: {
    global: {
      functions: 70,
      lines: 80,
      statements: -50,
    },
  },
};
