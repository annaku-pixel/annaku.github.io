const MESSAGE_PREFIXES = {
  formal: "Добрий день,",
  friendly: "Привіт!",
  professional: "Вітаю,"
};

const ALLOWED_TONES = Object.keys(MESSAGE_PREFIXES);
const MAX_TEXT_LENGTH = 500;

function inputText(text) {
  if (typeof text !== "string") {
    throw new TypeError("Text must be a string");
  }

  const trimmed = text.trim();

  if (trimmed.length === 0) {
    throw new Error("Text cannot be empty");
  }

  if (trimmed.length > MAX_TEXT_LENGTH) {
    throw new Error("Text is too long");
  }

  return trimmed;
}

function normalizePunctuation(text) {
  return text
    .trim()
    .replace(/\s*,\s*/g, ", ")
    .replace(/\s*\.\s*/g, ". ")
    .replace(/\s*!\s*/g, "! ")
    .replace(/\s*\?\s*/g, "? ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function capitalizeAfterSentenceEnd(text) {
  return text.replace(/(^|[.!?]\s+)([a-zа-яёіїєґ])/giu, (match, start, letter) => {
    return start + letter.toUpperCase();
  });
}

function lowercaseAfterComma(text) {
  return text.replace(/,\s*([a-zа-яёіїєґ])/giu, (match, letter) => {
    return ", " + letter.toLowerCase();
  });
}

function formatPunctuation(text) {
  let result = normalizePunctuation(text);
  result = capitalizeAfterSentenceEnd(result);
  result = lowercaseAfterComma(result);
  return result;
}

function removeExistingGreeting(text) {
  return text
    .trim()
    .replace(/^(привіт!?|добрий день,?|вітаю,?)\s*/i, "");
}

function generateMessage(text, tone) {
  const validText = inputText(text);

  if (!ALLOWED_TONES.includes(tone)) {
    throw new Error("Unsupported tone");
  }

  const cleanedText = removeExistingGreeting(validText);
  const prefix = MESSAGE_PREFIXES[tone];

  return formatPunctuation(`${prefix} ${cleanedText}`);
}

const exportedApi = {
  MESSAGE_PREFIXES,
  ALLOWED_TONES,
  MAX_TEXT_LENGTH,
  inputText,
  formatPunctuation,
  generateMessage
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = exportedApi;
}

if (globalThis.window !== undefined) {
  globalThis.window.AnswerBetterCore = exportedApi;
}