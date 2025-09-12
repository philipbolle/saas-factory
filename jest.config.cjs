/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // You can optionally switch to 'jsdom' if your tests need a browser environment
  // testEnvironment: 'jsdom', 
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        // ts-jest configuration goes here
        tsconfig: 'tsconfig.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};