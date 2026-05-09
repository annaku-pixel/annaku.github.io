const messageInput = document.getElementById("message");
const toneSelect = document.getElementById("tone");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const resultBlock = document.getElementById("result");
const historyList = document.getElementById("history");

const history = [];

function inputText(text) {
  if (typeof text !== "string") {
    throw new TypeError("Text must be a string");
  }

  const trimmed = text.trim();

  if (trimmed.length === 0) {
    throw new Error("Text cannot be empty");
  }

  if (trimmed.length > 500) {
    throw new Error("Text is too long");
  }

  return trimmed;
}

function formatPunctuation(text) {
  let result = text
    .trim()
    .replace(/\s*,\s*/g, ", ")
    .replace(/\s*\.\s*/g, ". ")
    .replace(/\s*!\s*/g, "! ")
    .replace(/\s*\?\s*/g, "? ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  result = result.replace(/(^|[.!?]\s+)([a-zа-яёіїєґ])/giu, (match, start, letter) => {
    return start + letter.toUpperCase();
  });

  result = result.replace(/,\s*([a-zа-яёіїєґ])/giu, (match, letter) => {
    return ", " + letter.toLowerCase();
  });

  return result;
}

function generateMessage(text, tone) {
  const validText = inputText(text);
  let result = "";

  if (tone === "formal") {
    result = `Добрий день, ${validText}`;
  } else if (tone === "friendly") {
    result = `Привіт! ${validText}`;
  } else {
    result = `Вітаю, ${validText}`;
  }

  return formatPunctuation(result);
}

function saveToHistory(result) {
  history.push(result);
  renderHistory();
}

function renderHistory() {
  historyList.innerHTML = "";

  history.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    historyList.appendChild(li);
  });
}

function copyResult(text) {
  if (!text || text.trim().length === 0) {
    throw new Error("Немає тексту для копіювання");
  }

  navigator.clipboard.writeText(text);
}

generateBtn.addEventListener("click", () => {
  try {
    const text = messageInput.value;
    const tone = toneSelect.value;

    const result = generateMessage(text, tone);
    resultBlock.textContent = result;
    saveToHistory(result);
  } catch (error) {
    resultBlock.textContent = error.message;
  }
});

copyBtn.addEventListener("click", () => {
  try {
    copyResult(resultBlock.textContent);
    alert("Результат скопійовано");
  } catch (error) {
    resultBlock.textContent = error.message;
  }
});