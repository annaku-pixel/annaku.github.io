const generateMessage =
  globalThis.window?.AnswerBetterCore?.generateMessage ??
  require("./answerbetter-core").generateMessage;
  
const resultBlock = document.getElementById("result");
const historyList = document.getElementById("history");

const history = [];

function saveToHistory(result) {
  history.push(result);
  renderHistory();
}

function renderHistory() {
  if (!historyList) return;

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

  return navigator.clipboard?.writeText?.(text) ?? text;
}

document.getElementById("generateBtn").addEventListener("click", () => {
  try {
    const text = document.getElementById("message").value;
    const tone = document.getElementById("tone").value;

    const result = generateMessage(text, tone);
    resultBlock.textContent = result;
    saveToHistory(result);
  } catch (error) {
    resultBlock.textContent = error.message;
  }
});

document.getElementById("copyBtn").addEventListener("click", async () => {
  try {
    await copyResult(resultBlock.textContent);
    alert("Результат скопійовано");
  } catch (error) {
    resultBlock.textContent = error.message;
  }
});

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    history,
    saveToHistory,
    copyResult
  };
}