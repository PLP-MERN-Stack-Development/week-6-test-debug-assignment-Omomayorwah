module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js'
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testMatch: ['**/tests/unit/**/*.test.jsx', '**/tests/unit/**/*.test.js'],
};
