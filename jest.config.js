module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  //   testPathIgnorePatterns: ['/.next', '/node_modules'],
  setupFilesAfterEnv: ['/jest.setup.js'],
  trasform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
