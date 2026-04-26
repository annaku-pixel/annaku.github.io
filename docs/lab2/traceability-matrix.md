# Матриця трасовності AnswerBetter

| Вимога | Use Case | Класи | Sequence |
|---|---|---|---|
| FR-01 | UC-01 Введення або вставлення тексту | User, InputMessage | SD-01 (фрагмент) |
| FR-02 | UC-02 Вибір бажаного тону | User, ToneOption | SD-01 (фрагмент) |
| FR-03 | UC-03 Генерація покращеного повідомлення | User, InputMessage, ToneOption, AIService, GeneratedResponse | SD-01 |
| FR-04 | UC-04 Відображення результату | User, GeneratedResponse | SD-01 (фрагмент) |
| FR-05 | UC-05 Копіювання згенерованого тексту | User, GeneratedResponse | — |
| FR-06 | UC-06 Збереження відповіді в історію / Перегляд історії відповідей | HistoryService, GeneratedResponse, User | SD-01 (фрагмент) / — |
