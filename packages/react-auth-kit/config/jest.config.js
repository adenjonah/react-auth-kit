/** @type {import('jest').Config} */
module.exports = {
  roots: ['<rootDir>/../src'],
  coverageDirectory: '<rootDir>/../coverage',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  preset: 'ts-jest',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: "jsdom",
  verbose: true,
  collectCoverage:true
};