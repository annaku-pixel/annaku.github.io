const express = require("express");
const path = require("node:path");
const {
  ALLOWED_TONES,
  generateMessage
} = require("./program_code/answerbetter-core");

const app = express();
app.disable("x-powered-by");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "program_code")));

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/tones", (req, res) => {
  res.json({ tones: ALLOWED_TONES });
});

app.post("/api/generate", (req, res) => {
  try {
    const { text, tone } = req.body;
    const result = generateMessage(text, tone);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});