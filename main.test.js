const {
  history,
  inputText,
  formatPunctuation,
  generateMessage,
  saveToHistory,
  copyResult,
} = require("./main");

describe("Куцевич tests", () => {
  beforeEach(() => {
    history.length = 0;
  });

  test("TC-01 inputText trims text", () => {
    const text = "  hello  ";

    const result = inputText(text);

    expect(result).toBe("hello");
  });

  test("TC-02 inputText throws TypeError for non-string", () => {
    const text = 123;
    expect(() => inputText(text)).toThrow(TypeError);
  });

  test("TC-03 inputText throws error for empty text", () => {
    const text = "   ";
    expect(() => inputText(text)).toThrow("Text cannot be empty");
  });

  test("TC-06 formatPunctuation capitalizes after dot", () => {
    const text = "ти вивчив фігму. тепер вмієш";
    const result = formatPunctuation(text);
    expect(result).toBe("Ти вивчив фігму. Тепер вмієш");
  });

  test("TC-08 generateMessage creates formal message", () => {
    const text = "я вивчив фігму";
    const tone = "formal";
    const result = generateMessage(text, tone);
    expect(result).toBe("Добрий день, я вивчив фігму");
  });

  test("TC-09 generateMessage creates friendly message", () => {
    const text = "я вивчив фігму";
    const tone = "friendly";
    const result = generateMessage(text, tone);
    expect(result).toBe("Привіт! Я вивчив фігму");
  });
});



