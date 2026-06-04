module.exports = {
  rootDir: "../..",
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/program_code/tests/main.test.js"],
  collectCoverage: true,
  collectCoverageFrom: [
    "program_code/main.js",
    "program_code/answerbetter-core.js"
  ],
  coverageDirectory: "<rootDir>/program_code/tests/coverage",
  coverageProvider: "v8"
};