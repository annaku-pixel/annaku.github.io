export default [
  {
    files: ["program_code/tests/**/*.js"],
    languageOptions: {
      globals: {
        require: "readonly",
        module: "readonly",
        // Jest globals
        describe: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeAll: "readonly",
        beforeEach: "readonly",
        afterAll: "readonly",
        afterEach: "readonly",
        jest: "readonly",
      }
    }
  },
  {
    files: ["program_code/**/*.js"],
    ignores: ["program_code/tests/**"],
    languageOptions: {
      globals: {
        document: "readonly",
        window: "readonly",
        navigator: "readonly",
        alert: "readonly",
        module: "readonly",
      }
    }
  },
  {
    files: ["lib.js"],
    languageOptions: {
      globals: {
        module: "readonly",
      }
    }
  },
  {
    ignores: ["coverage/**"]
  }
];