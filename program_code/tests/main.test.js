let history, inputText, formatPunctuation, generateMessage, saveToHistory, copyResult;
 
beforeAll(() => {
  document.body.innerHTML = `
    <input id="message" />
    <select id="tone"></select>
    <button id="generateBtn"></button>
    <button id="copyBtn"></button>
    <div id="result"></div>
    <ul id="history"></ul>
  `;
  ({ history, inputText, formatPunctuation, generateMessage, saveToHistory, copyResult } = require("../main"));
});
 
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



describe("Рижова tests", () => {
  beforeEach(() => {
    history.length = 0;

    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockResolvedValue(undefined),
      },
    });
  });

  test("TC-04 inputText accepts 500 chars", () => {
    const text = "a".repeat(500);
    const result = inputText(text);
    expect(result.length).toBe(500);
  });

  test("TC-05 inputText throws error for 501 chars", () => {
    const text = "a".repeat(501);
    expect(() => inputText(text)).toThrow("Text is too long");
  });

  test("TC-07 formatPunctuation lowercases after comma", () => {
    const text = "привіт, СВІТ";
    const result = formatPunctuation(text);
    expect(result).toBe("Привіт, світ");
  });

  test("TC-10 generateMessage creates professional message", () => {
    const text = "я вивчив фігму";
    const tone = "professional";
    const result = generateMessage(text, tone);
    expect(result).toBe("Вітаю, я вивчив фігму");
  });

  test("TC-11 saveToHistory stores result", () => {
    saveToHistory("Перший");
    saveToHistory("Другий");
    expect(history).toEqual(["Перший", "Другий"]); 
  });

  test("TC-12 copyResult throws error for empty text", () => {
    const text = "";
    expect(() => copyResult(text)).toThrow("Немає тексту для копіювання");
  });

  test("TC-13 copyResult writes text to clipboard", async () => {
    const text = "Скопіюй мене";
    await copyResult(text);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(text);
  });
});




test("extra click on generateBtn shows generated result and saves history", () => {
  jest.resetModules();
  document.body.innerHTML = `
    <textarea id="message"></textarea>
    <select id="tone">
      <option value="formal">formal</option>
      <option value="friendly">friendly</option>
      <option value="professional">professional</option>
    </select>
    <button id="generateBtn"></button>
    <button id="copyBtn"></button>
    <div id="result"></div>
    <ul id="history"></ul>
  `;

  const app = require("../main");

  document.getElementById("message").value = "я вивчив фігму";
  document.getElementById("tone").value = "formal";  document.getElementById("generateBtn").click();  expect(document.getElementById("result").textContent)
    .toBe("Добрий день, я вивчив фігму");
  expect(document.getElementById("history").children.length).toBe(1);
});

test("extra click on generateBtn shows error message for empty input", () => {
  jest.resetModules();
  document.body.innerHTML = `
    <textarea id="message"></textarea>
    <select id="tone">
      <option value="formal">formal</option>
    </select>
    <button id="generateBtn"></button>
    <button id="copyBtn"></button>
    <div id="result"></div>
    <ul id="history"></ul>
  `;

  require("../main");

  document.getElementById("message").value = "   ";
  document.getElementById("tone").value = "formal";
  document.getElementById("generateBtn").click();
  expect(document.getElementById("result").textContent)
    .toBe("Text cannot be empty");
});
