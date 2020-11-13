module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/src/jest-config/styleMock.ts',
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/jest-config/fileMock.ts"
  },
  "setupFilesAfterEnv": [
    "<rootDir>/src/setupTests.ts"
  ],
  globals: {
    'ts-jest': {
      "tsconfig": "<rootDir>/tsconfig.test.json",
    }
  },
}