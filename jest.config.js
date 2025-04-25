/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\.tsx?$": ["ts-jest", {}],
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
};