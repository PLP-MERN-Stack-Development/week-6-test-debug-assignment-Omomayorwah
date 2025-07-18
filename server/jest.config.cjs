module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testMatch: [
    '**/tests/**/*.test.js',
    '**/tests/**/*.test.mjs'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {}, // Disable transforms to allow ESM
};
