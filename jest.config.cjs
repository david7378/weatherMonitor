module.exports = {
  roots: [
    "<rootDir>/src/"
  ],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {//the content you'd placed at "global"
      babel: true,
      tsconfig: 'tsconfig.json',
    }]
  },
  preset: "ts-jest",
  testEnvironment: 'jest-environment-jsdom',
  "modulePaths": ["."],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    "^.+\\.svg$": "jest-svg-transformer",
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
  //testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/build/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  testMatch: [
    "<rootDir>/src/**/*.(test).{js,jsx,ts,tsx}",
    "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}"
  ],

}