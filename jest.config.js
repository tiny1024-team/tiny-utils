module.exports = {
  verbose: true,
  modulePaths: ['<rootDir>/src/'],
  collectCoverageFrom: ['src/**/*.ts','!src/url/download.ts','!src/array/uniqueArr.ts'],  //TODO download和uniqueArr不能很好用jest测试
  coverageDirectory: "coverage",
  testMatch: ['<rootDir>/test/**/*.test.ts'],
  testURL: 'http://localhost',
  testPathIgnorePatterns: ['node_modules', '.cache'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$'],
  preset: "ts-jest/presets/js-with-ts",
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80
    }
  }
};
